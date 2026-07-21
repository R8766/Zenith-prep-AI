import Layout from "../components/Layout";
import { Link } from "react-router-dom";

import {
  FaSearch,
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaCloud,
  FaUsers,
  FaBuilding,
  FaProjectDiagram,
} from "react-icons/fa";

const roadmap = [
  {
    title: "DSA",
    slug: "dsa",
    icon: <FaCode className="text-purple-600 text-3xl" />,
    topics: "Arrays • Linked Lists • Trees • Graphs • Sorting",
    progress: 65,
    problems: "52 Problems",
    color: "bg-purple-600",
    bg: "bg-purple-50 dark:bg-purple-950/30",
  },
  {
    title: "Development",
    slug: "development",
    icon: <FaLaptopCode className="text-green-600 text-3xl" />,
    topics: "React • Node • MongoDB • SQL",
    progress: 40,
    problems: "30 Topics",
    color: "bg-green-500",
    bg: "bg-green-50 dark:bg-green-950/30",
  },
  {
    title: "CS Subjects",
    slug: "cs-subjects",
    icon: <FaDatabase className="text-orange-500 text-3xl" />,
    topics: "DBMS • OS • CN • OOP",
    progress: 55,
    problems: "20 Topics",
    color: "bg-orange-500",
    bg: "bg-orange-50 dark:bg-orange-950/30",
  },
  {
    title: "System Design",
    slug: "system-design",
    icon: <FaProjectDiagram className="text-blue-500 text-3xl" />,
    topics: "HLD • LLD • Scalability",
    progress: 0,
    problems: "5 Cases",
    color: "bg-blue-500",
    bg: "bg-blue-50 dark:bg-blue-950/30",
  },
  {
    title: "Cloud & DevOps",
    slug: "cloud-devops",
    icon: <FaCloud className="text-yellow-500 text-3xl" />,
    topics: "AWS • Docker • Kubernetes",
    progress: 10,
    problems: "10 Labs",
    color: "bg-yellow-500",
    bg: "bg-yellow-950/30",
  },
  {
    title: "HR & Soft Skills",
    slug: "hr-soft-skills",
    icon: <FaUsers className="text-indigo-500 text-3xl" />,
    topics: "Communication • Resume • HR",
    progress: 30,
    problems: "20 Questions",
    color: "bg-indigo-500",
    bg: "bg-indigo-50 dark:bg-indigo-950/30",
  },
  {
    title: "Company Prep",
    slug: "company-prep",
    icon: <FaBuilding className="text-red-500 text-3xl" />,
    topics: "OA • Interview • Aptitude",
    progress: 5,
    problems: "50 Questions",
    color: "bg-red-500",
    bg: "bg-red-50 dark:bg-red-950/30",
  },
];

function Topics() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-100 via-indigo-50 to-blue-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 transition-colors duration-300">

        {/* Hero Section */}

        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-3xl p-8 text-white shadow-xl mb-8">

          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">

            <div>
              <h1 className="text-4xl font-bold">
                🚀 Learning Roadmap
              </h1>

              <p className="mt-3 text-lg text-indigo-100">
                Master DSA, Development & Core Subjects to crack placements.
              </p>
            </div>

            <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl hover:scale-105 transition">
              Continue Learning
            </button>

          </div>

        </div>

        {/* Stats */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8">

          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-5 transition-colors">
            <p className="text-gray-500 dark:text-gray-400">
              Topics
            </p>

            <h2 className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">
              145
            </h2>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-5 transition-colors">
            <p className="text-gray-500 dark:text-gray-400">
              Completed
            </p>

            <h2 className="text-3xl font-bold text-green-600 mt-2">
              52
            </h2>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-5 transition-colors">
            <p className="text-gray-500 dark:text-gray-400">
              Streak
            </p>

            <h2 className="text-3xl font-bold text-orange-500 mt-2">
              🔥 7
            </h2>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-5 transition-colors">
            <p className="text-gray-500 dark:text-gray-400">
              XP
            </p>

            <h2 className="text-3xl font-bold text-purple-600 mt-2">
              540
            </h2>
          </div>

        </div>

        {/* Search */}

        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg flex items-center px-5 py-4 mb-8 transition-colors">

          <FaSearch className="text-gray-400 text-xl" />

          <input
            type="text"
            placeholder="Search DSA, React, DBMS..."
            className="
              ml-4
              w-full
              outline-none
              text-lg
              bg-transparent
              text-gray-900
              dark:text-white
              placeholder:text-gray-400
            "
          />

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">

          {roadmap.map((item, index) => (

            <div
              key={index}
              className={`${item.bg} rounded-3xl p-6 border border-white dark:border-slate-700 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300`}
            >

              <div className="flex justify-between items-start">

                <div>

                  <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center shadow">
                    {item.icon}
                  </div>

                  <h2 className="text-2xl font-bold mt-4 text-gray-900 dark:text-white">
                    {item.title}
                  </h2>

                </div>

                <span className="font-bold text-lg text-gray-800 dark:text-white">
                  {item.progress}%
                </span>

              </div>

              <p className="text-gray-600 dark:text-gray-300 mt-4 text-sm">
                {item.topics}
              </p>

              <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-3 mt-6 overflow-hidden">

                <div
                  className={`${item.color} h-3 rounded-full`}
                  style={{ width: `${item.progress}%` }}
                />

              </div>

              <div className="flex justify-between items-center mt-6">

                <div>

                  <p className="font-semibold text-gray-900 dark:text-white">
                    {item.problems}
                  </p>

                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Keep Learning 🚀
                  </p>

                </div>

                <Link
                  to={`/topics/${item.slug}`}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-xl font-medium transition"
                >
                  Continue
                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>
    </Layout>
  );
}

export default Topics;