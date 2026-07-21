const Progress = require("../models/Progress");

exports.getProgress = async (req, res) => {
  try {
    const progress = await Progress.find({
      userId: req.user.id,
    });

    res.json(progress);
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};