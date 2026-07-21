const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const JWT_SECRET = "mysecretkey";


exports.signup = async (req, res) => {

    

    const { name, email, password} = req.body;

    if(!name || !email || !password) {

        return res.status(400).json({
            message:"All fields are required"
    
        });
    }

    try {

        const existingUser = await User.findOne({ email });

    if(existingUser) {
        return res.status(400).json({
            message: "User already exists"
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = new User({
        name,
        email,
        password: hashedPassword
    });

    await user.save();

    res.json({
        message: "Signup successful"
    });

    }

    catch(error) {

        console.log(error);

        res.status(500).json({
            message: "Something went wrong"
        });
    }




};

exports.login = async (req, res) => {

    

    const { email, password } = req.body;

    if(!email || !password) {

        return res.status(400).json({
            message: "All fields are required"

        });
    }

    try {

        const user = await User.findOne({email});

        if(!user) {

            return res.status(400).json({
                message: "User not found"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {

            return res.status(400).json({
                message:"Invalid password"
            });
        }

        const token = jwt.sign(
            {
                id: user._id,
                email: user.email
            },
            JWT_SECRET,
            {
                expiresIn: "7d"
            }
        );

        res.status(200).json({
            message: "Login successful",
            token
        });

    }

    catch(error) {

        console.log(error);

        res.status(500).json({
            message: "Something went wrong"
        });
    }


};

exports.googleLogin = async (req, res) => {
    try {

        const { name, email } = req.body;

        let user = await User.findOne({ email });

        if (!user) {

            const randomPassword = crypto.randomBytes(20).toString("hex");

            const hashedPassword = await bcrypt.hash(randomPassword, 10);

            user = new User({
                name,
                email,
                password: hashedPassword
            });

            await user.save();
        }

        const token = jwt.sign(
            {
                id: user._id,
                email: user.email,
            },
            JWT_SECRET,
            {
                expiresIn: "7d",
            }
        );

        res.status(200).json({
            message: "Google Login Successful",
            token,
            user,
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Something went wrong",
        });

    }
};

exports.getProfile = async (req, res) => {

    res.status(200).json({

        message: "Welcome",

        user: req.user

    });

};