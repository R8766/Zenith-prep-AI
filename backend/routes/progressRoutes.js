const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");

const {
  markComplete,
} = require("../controllers/progressController");

const {
  getProgress,
} = require("../controllers/getProgressController");

router.post("/complete", auth, markComplete);

router.get("/", auth, getProgress);

module.exports = router;