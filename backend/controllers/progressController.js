const Progress = require("../models/Progress");

exports.markComplete = async (req, res) => {
  try {

    const { category, topic } = req.body;

    const progress = await Progress.findOneAndUpdate(
      {
        userId: req.user.id,
        category,
        topic,
      },
      {
        completed: true,
        completedAt: new Date(),
      },
      {
        upsert: true,
        new: true,
      }
    );

    res.json(progress);

  } catch (err) {

    res.status(500).json({
      message: "Error"
    });

  }
};