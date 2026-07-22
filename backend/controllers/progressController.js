const Progress = require("../models/Progress");

// GET USER PROGRESS
exports.getProgress = async (req, res) => {
  try {
    let progress = await Progress.findOne({
      user: req.user.id,
    });

    // Create progress automatically if it doesn't exist
    if (!progress) {
      progress = await Progress.create({
        user: req.user.id,
      });
    }

    res.json(progress);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Failed to fetch progress",
    });
  }
};