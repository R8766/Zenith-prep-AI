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
    const taskXP = xp || oldTask.xp || 20;

    oldTask.title = title;
    oldTask.category = category;
    oldTask.difficulty = difficulty;
    oldTask.xp = xp;
    oldTask.completed = completed;

    await oldTask.save();

    // Incomplete → Completed
    if (!wasCompleted && completed) {
  const progress = await Progress.findOneAndUpdate(
    { user: req.user.id },
    {
      $inc: {
        totalXP: taskXP,
        completedTasks: 1,
        weeklyCompleted: 1,
        coins: 10,
      },
    },
    {
      upsert: true,
      new: true,
    }
  );

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  let streak = progress.currentStreak || 0;

  if (!progress.lastCompletedDate) {
    // First ever completion
    streak = 1;
  } else {
    const lastDate = new Date(progress.lastCompletedDate);
    lastDate.setHours(0, 0, 0, 0);

    const difference =
      (today - lastDate) / (1000 * 60 * 60 * 24);

    if (difference === 1) {
      // Completed on the next day
      streak += 1;
    } else if (difference > 1) {
      // Missed one or more days
      streak = 1;
    }
    // difference === 0 → already completed today
  }

  progress.currentStreak = streak;
  progress.lastCompletedDate = new Date();

  await progress.save();
}

    // Completed → Incomplete
    if (wasCompleted && !completed) {
      await Progress.findOneAndUpdate(
        { user: req.user.id },
        {
          $inc: {
            totalXP: -taskXP,
            completedTasks: -1,
            weeklyCompleted: -1,
          },
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