const Task = require("../models/Task");
const Progress = require("../models/Progress");

// CREATE TASK
exports.createTask = async (req, res) => {
  try {
    const {
      title,
      category,
      difficulty,
      xp,
    } = req.body;

    const task = new Task({
      title,
      category,
      difficulty,
      xp,
      createdBy: req.user.id,
    });

    await task.save();

    res.status(201).json({
      message: "Task Created",
      task,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Something went wrong",
    });
  }
};


// GET ALL USER TASKS
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({
      createdBy: req.user.id,
    }).sort({ createdAt: -1 });

    res.json(tasks);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Something went wrong",
    });
  }
};


// UPDATE TASK
// UPDATE TASK
exports.updateTask = async (req, res) => {
  try {
    const {
      title,
      category,
      difficulty,
      xp,
      completed,
    } = req.body;

    const oldTask = await Task.findOne({
      _id: req.params.id,
      createdBy: req.user.id,
    });

    if (!oldTask) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    const wasCompleted = oldTask.completed;

    oldTask.title = title;
    oldTask.category = category;
    oldTask.difficulty = difficulty;
    oldTask.xp = xp;
    oldTask.completed = completed;

    await oldTask.save();

    // Only update progress when task is completed for the first time
    if (!wasCompleted && completed) {
      await Progress.findOneAndUpdate(
        { user: req.user.id },
        {
          $inc: {
            totalXP: xp || 20,
            completedTasks: 1,
            weeklyCompleted: 1,
          },
          $set: {
            lastCompletedDate: new Date(),
          },
        },
        {
          upsert: true,
          new: true,
        }
      );
    }

    res.json({
      message: "Task updated successfully",
      task: oldTask,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Something went wrong",
    });
  }
};


// DELETE TASK
exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      createdBy: req.user.id,
    });

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }

    res.json({
      message: "Task Deleted",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Something went wrong",
    });
  }
};