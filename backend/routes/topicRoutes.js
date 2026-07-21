const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");

const {

    createTopic,
    getTopics,
    updateTopic,
    deleteTopic

} = require("../controllers/topicController");

router.post("/topics", auth, createTopic);

router.get("/topics", auth, getTopics);

router.put("/topics/:id", auth, updateTopic);

router.delete("/topics/:id", auth, deleteTopic);

module.exports = router;