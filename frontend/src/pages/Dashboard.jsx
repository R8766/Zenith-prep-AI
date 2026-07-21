import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBook,
  FaCheckCircle,
  FaTasks,
  FaFire,
  FaSignOutAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import api from "../services/api";

function Dashboard() {
  const navigate = useNavigate();
  const [data, setData] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
      return;
    }

    const fetchDashboard = async () => {
      try {
        const response = await api.get("/dashboard");
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDashboard();
  }, [navigate]);

  const cards = [
    {
      title: "Topics",
      value: data.totalTopics || 0,
      icon: <FaBook className="text-3xl text-indigo-600" />,
    },
    {
      title: "Completed",
      value: data.completedTasks || 0,
      icon: <FaCheckCircle className="text-3xl text-green-600" />,
    },
    {
      title: "Tasks",
      value: data.totalTasks || 0,
      icon: <FaTasks className="text-3xl text-orange-500" />,
    },
    {
      title: "Progress",
      value: `${data.progress || 0}%`,
      icon: <FaFire className="text-3xl text-red-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Navbar */}
      <div className="bg-indigo-600 text-white px-8 py-5 flex justify-between items-center shadow-lg">
        <h1 className="text-3xl font-bold">📚 PrepTracker</h1>

        <button
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/");
          }}
          className="flex items-center gap-2 bg-white text-indigo-600 px-4 py-2 rounded-xl font-semibold hover:bg-gray-100"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>

      <div className="max-w-7xl mx-auto p-8">

        <h2 className="text-4xl font-bold">
          Welcome Back 👋
        </h2>

        <p className="text-gray-500 mt-2">
          Continue your placement preparation.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

          {cards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-500">{card.title}</p>

                  <h2 className="text-4xl font-bold mt-2">
                    {card.value}
                  </h2>
                </div>

                {card.icon}
              </div>
            </motion.div>
          ))}

        </div>

        {/* Progress */}
        <div className="bg-white mt-10 rounded-2xl shadow-lg p-6">

          <h2 className="text-2xl font-bold">
            Overall Progress
          </h2>

          <div className="w-full bg-gray-200 rounded-full h-4 mt-5">

            <div
              className="bg-indigo-600 h-4 rounded-full"
              style={{
                width: `${data.progress || 0}%`,
              }}
            ></div>

          </div>

          <p className="mt-3 text-gray-600">
            {data.progress || 0}% Completed
          </p>

        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-2xl shadow-lg p-8 cursor-pointer"
            onClick={() => navigate("/topics")}
          >
            <h2 className="text-2xl font-bold">
              📚 Topics
            </h2>

            <p className="text-gray-500 mt-3">
              Manage all your study topics.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-2xl shadow-lg p-8 cursor-pointer"
            onClick={() => navigate("/tasks")}
          >
            <h2 className="text-2xl font-bold">
              ✅ Tasks
            </h2>

            <p className="text-gray-500 mt-3">
              Track all your daily practice.
            </p>
          </motion.div>

        </div>

        {/* Study Streak UI */}
        <div className="bg-white mt-10 rounded-2xl shadow-lg p-6">

          <h2 className="text-2xl font-bold">
            🔥 Study Streak
          </h2>

          <p className="text-gray-500 mt-2">
            (Frontend preview — we'll connect it later.)
          </p>

          <div className="grid grid-cols-7 gap-2 mt-6 max-w-sm">

            {[
              1,1,0,1,1,1,0,
              1,1,1,1,0,1,1,
              1,0,1,1,1,1,1,
              1,1,1,0,1,1,1
            ].map((item, index) => (
              <div
                key={index}
                className={`h-5 w-5 rounded ${
                  item ? "bg-green-500" : "bg-gray-300"
                }`}
              />
            ))}

          </div>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;