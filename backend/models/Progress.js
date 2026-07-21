const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  category: String,

  topic: String,

  completed: {
    type: Boolean,
    default: false,
  },

  completedAt: Date,
});

module.exports = mongoose.model("Progress", progressSchema);