const express = require("express");

const auth = require("../middleware/auth");

const router = express.Router();

const {
    signup,
    login,
    googleLogin,
    getProfile
} = require("../controllers/authController");

router.post("/signup", signup);

router.post("/login", login);

router.post("/google-login", googleLogin);

router.get("/profile", auth, getProfile);

module.exports = router;