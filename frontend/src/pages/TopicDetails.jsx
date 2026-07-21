import { useParams, Link } from "react-router-dom";
import Layout from "../components/Layout";
import roadmapData from "../data/roadmapData";

import {
  FaBookOpen,
  FaYoutube,
  FaCode,
  FaCheckCircle,
} from "react-icons/fa";

function TopicDetails() {
  const { category } = useParams();

  if (!category) {
    return (
      <Layout>
        <h1 className="text-3xl p-10 text-gray-900 dark:text-white">
          Category not found
        </h1>
      </Layout>
    );
  }

  const topics = roadmapData[category] || [];

  return (
    <Layout>

      <div className="min-h-screen bg-slate-100 dark:bg-slate-950 p-6 transition-colors duration-300">

        {/* Hero */}

        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-3xl text-white p-8 shadow-xl mb-8">

          <h1 className="text-4xl font-bold capitalize">
            {category.replace(/-/g, " ")}
          </h1>

          <p className="mt-3 text-indigo-100">
            Choose a topic to start learning.
          </p>

        </div>

        {/* Topics */}

        <div className="grid lg:grid-cols-2 gap-6">

          {topics.map((topic, index) => (

            <div
              key={index}
              className="
                bg-white
                dark:bg-slate-900
                border
                border-gray-200
                dark:border-slate-700
                rounded-3xl
                shadow-lg
                p-6
                transition-colors
                duration-300
              "
            >

              <Link
                to={`/learn/${category}/${topic
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              >

                <h2 className="
                  text-2xl
                  font-bold
                  mb-6
                  text-gray-900
                  dark:text-white
                  hover:text-indigo-600
                  dark:hover:text-indigo-400
                  transition
                ">
                  {topic}
                </h2>

              </Link>

              <div className="space-y-3">

                {/* Notes */}

                <button className="
                  w-full
                  flex
                  items-center
                  gap-3
                  bg-indigo-50
                  dark:bg-indigo-950/50
                  text-gray-800
                  dark:text-indigo-200
                  p-4
                  rounded-xl
                  hover:bg-indigo-100
                  dark:hover:bg-indigo-900
                  transition
                ">

                  <FaBookOpen className="text-indigo-600 dark:text-indigo-400" />

                  Notes

                </button>

                {/* Tutorial */}

                <button className="
                  w-full
                  flex
                  items-center
                  gap-3
                  bg-red-50
                  dark:bg-red-950/50
                  text-gray-800
                  dark:text-red-200
                  p-4
                  rounded-xl
                  hover:bg-red-100
                  dark:hover:bg-red-900
                  transition
                ">

                  <FaYoutube className="text-red-600 dark:text-red-400" />

                  Watch Tutorial

                </button>

                {/* Practice */}

                <button className="
                  w-full
                  flex
                  items-center
                  gap-3
                  bg-green-50
                  dark:bg-green-950/50
                  text-gray-800
                  dark:text-green-200
                  p-4
                  rounded-xl
                  hover:bg-green-100
                  dark:hover:bg-green-900
                  transition
                ">

                  <FaCode className="text-green-600 dark:text-green-400" />

                  Practice Problems

                </button>

                {/* Complete */}

                <button className="
                  w-full
                  flex
                  items-center
                  gap-3
                  bg-purple-50
                  dark:bg-purple-950/50
                  text-gray-800
                  dark:text-purple-200
                  p-4
                  rounded-xl
                  hover:bg-purple-100
                  dark:hover:bg-purple-900
                  transition
                ">

                  <FaCheckCircle className="text-purple-600 dark:text-purple-400" />

                  Mark Complete

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </Layout>
  );
}

export default TopicDetails;