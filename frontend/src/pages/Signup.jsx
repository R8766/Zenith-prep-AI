import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  FaBookOpen,
  FaUser,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";
import { motion } from "framer-motion";
import api from "../services/api";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await api.post("/signup", {
        name,
        email,
        password,
      });

      alert("Signup Successful!");
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Signup Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-500 dark:from-slate-950 dark:via-slate-900 dark:to-black flex items-center justify-center p-6 transition-colors duration-300">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-slate-900 w-full max-w-md rounded-3xl shadow-2xl p-8 transition-colors duration-300"
      >

        {/* Logo */}
        <div className="flex justify-center">
          <div className="bg-indigo-100 dark:bg-indigo-900/50 p-4 rounded-full">
            <FaBookOpen className="text-indigo-600 dark:text-indigo-400 text-3xl" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-center mt-4 text-gray-900 dark:text-white">
          Create Account
        </h1>

        <p className="text-center text-gray-500 dark:text-gray-400 mt-2">
          Join PrepTracker and start preparing 🚀
        </p>

        {/* Name */}
        <div className="mt-8">

          <label className="font-medium text-gray-800 dark:text-gray-200">
            Name
          </label>

          <div className="flex items-center border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-xl px-3 mt-2">

            <FaUser className="text-gray-400" />

            <input
              type="text"
              placeholder="Enter Name"
              className="w-full p-3 outline-none bg-transparent text-gray-900 dark:text-white placeholder-gray-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

          </div>

        </div>

        {/* Email */}
        <div className="mt-5">

          <label className="font-medium text-gray-800 dark:text-gray-200">
            Email
          </label>

          <div className="flex items-center border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-xl px-3 mt-2">

            <FaEnvelope className="text-gray-400" />

            <input
              type="email"
              placeholder="Enter Email"
              className="w-full p-3 outline-none bg-transparent text-gray-900 dark:text-white placeholder-gray-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

          </div>

        </div>

        {/* Password */}
        <div className="mt-5">

          <label className="font-medium text-gray-800 dark:text-gray-200">
            Password
          </label>

          <div className="flex items-center border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-xl px-3 mt-2">

            <FaLock className="text-gray-400" />

            <input
              type="password"
              placeholder="Enter Password"
              className="w-full p-3 outline-none bg-transparent text-gray-900 dark:text-white placeholder-gray-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

          </div>

        </div>

        {/* Signup Button */}
        <button
          onClick={handleSignup}
          className="w-full mt-8 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition"
        >
          Create Account
        </button>

        {/* Login */}
        <p className="text-center mt-6 text-gray-600 dark:text-gray-400">

          Already have an account?{" "}

          <Link
            to="/"
            className="text-indigo-600 dark:text-indigo-400 font-semibold"
          >
            Login
          </Link>

        </p>

      </motion.div>

    </div>
  );
}

export default Signup;