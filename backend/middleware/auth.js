const jwt = require("jsonwebtoken");

const JWT_SECRET = "mysecretkey";

const auth = (req, res, next) => {

    console.log("Authorization Header:", req.headers.authorization);

    const authHeader = req.headers.authorization;

    if (!authHeader) {

        return res.status(401).json({
            message: "Access Denied"
        });

    }

    const token = authHeader.replace("Bearer ", "");

    console.log("Token after removing Bearer:", token);

    try {

        const decoded = jwt.verify(token, JWT_SECRET);

        console.log("Decoded:", decoded);

        req.user = decoded;

        next();

    } catch (error) {

        console.log("JWT Error:", error.message);

        return res.status(401).json({
            message: "Invalid Token"
        });

    }

};

module.exports = auth;