const Topic = require("../models/Topic");

exports.createTopic = async (req, res) => {

    try {

        const { title, description } = req.body;

        const topic = new Topic({

            title,
            description,
            createdBy: req.user.id

        });
    
        await topic.save();

        res.status(201).json({
            message: "Topic Created",
            topic
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Something went wrong"
        });

    }

};

//get all topics
exports.getTopics = async (req, res) => {

    try {

        const topics = await Topic.find({
            createdBy: req.user.id
        });

        res.json(topics);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Something went wrong"
        });

    }

};


//update topic
exports.updateTopic = async (req, res) => {

    try {

        const topic = await Topic.findOneAndUpdate(

            {
                _id: req.params.id,
                createdBy: req.user.id
            },

            req.body,

            {
                new: true
            }

        );

        res.json({
            message: "Topic updated",
            topic
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Something went wrong"
        });

    }

};


//delete topic
exports.deleteTopic = async (req, res) => {

    try {

        await Topic.findOneAndDelete({

            _id: req.params.id,
            createdBy: req.user.id

        });

        res.json({
            message: "Topic deleted"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Something went wrong"
        });

    }

};