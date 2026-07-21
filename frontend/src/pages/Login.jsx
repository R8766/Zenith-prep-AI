import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaBookOpen, FaEnvelope, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";
import api from "../services/api";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await api.post("/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      navigate("/home");

    } catch (error) {
      console.log(error);
      alert("Invalid Email or Password");
    }
  };

  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      localStorage.setItem("name", result.user.displayName);
      localStorage.setItem("photo", result.user.photoURL);
      localStorage.setItem("email", result.user.email);

      const response = await api.post("/google-login", {
        name: result.user.displayName,
        email: result.user.email,
      });

      localStorage.setItem("token", response.data.token);

      localStorage.setItem(
        "user",
        JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        })
      );

      navigate("/home");

    } catch (error) {
      console.log(error);
      alert("Google Login Failed");
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
          PrepTracker
        </h1>

        <p className="text-center text-gray-500 dark:text-gray-400 mt-2">
          Ace Your Placement Preparation 🚀
        </p>

        {/* Email */}
        <div className="mt-8">

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

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full mt-8 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition"
        >
          Login
        </button>

        {/* Google Login */}
        <button
          onClick={googleLogin}
          className="w-full mt-4 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-700 text-gray-800 dark:text-white rounded-xl py-3 flex justify-center items-center gap-3 hover:bg-gray-100 dark:hover:bg-slate-700 transition"
        >

          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            className="w-5 h-5"
          />

          Continue with Google

        </button>

        {/* Signup */}
        <p className="text-center mt-6 text-gray-600 dark:text-gray-400">

          Don't have an account?{" "}

          <Link
            to="/signup"
            className="text-indigo-600 dark:text-indigo-400 font-semibold"
          >
            Sign Up
          </Link>

        </p>

      </motion.div>

    </div>
  );
}

export default Login;