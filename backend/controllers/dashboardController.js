const Topic = require("../models/Topic");
const Task = require("../models/Task");

exports.getDashboard = async (req, res) => {

    try {

        const totalTopics = await Topic.countDocuments({
            createdBy: req.user.id
        });

        const completedTopics = await Topic.countDocuments({
            createdBy: req.user.id,
            progress: 100
        });

        const totalTasks = await Task.countDocuments({
            createdBy: req.user.id
        });

        const completedTasks = await Task.countDocuments({
            createdBy: req.user.id,
            completed: true
        });

        const progress = totalTasks === 0
            ? 0
            : Math.round((completedTasks / totalTasks) * 100);

        res.status(200).json({
            totalTopics,
            completedTopics,
            totalTasks,
            completedTasks,
            progress
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Something went wrong"
        });

    }

};