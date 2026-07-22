import { useParams, Link } from "react-router-dom";
import Layout from "../components/Layout";
import dsa from "../data/dsa";
import axios from "axios";

import {
  FaYoutube,
  FaBookOpen,
  FaCode,
  FaCheckCircle,
  FaArrowLeft,
} from "react-icons/fa";

function LearningPage() {
  const { category, topic } = useParams();

  let data = [];

  if (category === "dsa") {
    data = dsa;
  }

  const currentTopic = data.find(
    (item) =>
      item.name.toLowerCase().replace(/\s+/g, "-") === topic
  );

  if (!currentTopic) {
    return (
      <Layout>
        <div className="p-10">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Topic Not Found
          </h1>
        </div>
      </Layout>
    );
  }

  const markComplete = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "https://zenith-prep.onrender.com/api/progress/complete",
        {
          category,
          topic: currentTopic.topic,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("🎉 Topic Completed!");

    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  };

  return (
    <Layout>

      <div
        className="
          min-h-screen
          bg-gradient-to-br
          from-slate-100
          via-indigo-50
          to-blue-100
          dark:from-slate-950
          dark:via-slate-900
          dark:to-slate-950
          p-8
          transition-colors
          duration-300
        "
      >

        {/* Back Button */}

        <Link
          to={`/topics/${category}`}
          className="
            inline-flex
            items-center
            gap-2
            mb-6
            text-indigo-600
            dark:text-indigo-400
            font-semibold
            hover:underline
          "
        >
          <FaArrowLeft />
          Back
        </Link>


        {/* Hero Section */}

        <div className="
          bg-gradient-to-r
          from-indigo-600
          via-purple-600
          to-blue-600
          rounded-3xl
          p-8
          text-white
          shadow-xl
        ">

          <h1 className="text-5xl font-bold">
            {currentTopic.name}
          </h1>

          <p className="mt-4 text-lg">
            Progress : {currentTopic.progress}%
          </p>

          <div className="w-full bg-white/30 rounded-full h-4 mt-5 overflow-hidden">

            <div
              className="bg-green-400 h-4 rounded-full transition-all duration-700"
              style={{
                width: `${currentTopic.progress}%`,
              }}
            />

          </div>

        </div>


        {/* Stats */}

        <div className="grid md:grid-cols-3 gap-6 mt-8">


          {/* Problems */}

          <div className="
            bg-white
            dark:bg-slate-900
            border
            border-gray-200
            dark:border-slate-700
            rounded-3xl
            shadow-lg
            p-6
            transition-colors
          ">

            <p className="text-gray-500 dark:text-gray-400">
              Problems
            </p>

            <h2 className="
              text-4xl
              font-bold
              mt-2
              text-gray-900
              dark:text-white
            ">
              {currentTopic.problems.length}
            </h2>

          </div>


          {/* Progress */}

          <div className="
            bg-white
            dark:bg-slate-900
            border
            border-gray-200
            dark:border-slate-700
            rounded-3xl
            shadow-lg
            p-6
            transition-colors
          ">

            <p className="text-gray-500 dark:text-gray-400">
              Progress
            </p>

            <h2 className="text-4xl font-bold text-indigo-600 mt-2">
              {currentTopic.progress}%
            </h2>

          </div>


          {/* XP Reward */}

          <div className="
            bg-white
            dark:bg-slate-900
            border
            border-gray-200
            dark:border-slate-700
            rounded-3xl
            shadow-lg
            p-6
            transition-colors
          ">

            <p className="text-gray-500 dark:text-gray-400">
              XP Reward
            </p>

            <h2 className="text-4xl font-bold text-orange-500 mt-2">
              +50
            </h2>

          </div>

        </div>


        {/* Learning Buttons */}

        <div className="grid md:grid-cols-3 gap-6 mt-8">


          {/* Watch Tutorial */}

          <a
            href={currentTopic.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-red-500
              hover:bg-red-600
              rounded-3xl
              p-6
              text-white
              shadow-lg
              transition
              hover:scale-105
            "
          >

            <FaYoutube className="text-5xl mb-4" />

            <h2 className="text-2xl font-bold">
              Watch Tutorial
            </h2>

          </a>


          {/* Read Notes */}

          <a
            href={currentTopic.notes}
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-green-500
              hover:bg-green-600
              rounded-3xl
              p-6
              text-white
              shadow-lg
              transition
              hover:scale-105
            "
          >

            <FaBookOpen className="text-5xl mb-4" />

            <h2 className="text-2xl font-bold">
              Read Notes
            </h2>

          </a>


          {/* Practice */}

          <div className="
            bg-blue-500
            rounded-3xl
            p-6
            text-white
            shadow-lg
          ">

            <FaCode className="text-5xl mb-4" />

            <h2 className="text-2xl font-bold">
              Practice
            </h2>

            <p>
              {currentTopic.problems.length} Questions
            </p>

          </div>

        </div>


        {/* Practice Problems */}

        <div className="mt-12">

          <div className="flex justify-between items-center mb-6">

            <h2 className="
              text-3xl
              font-bold
              text-gray-900
              dark:text-white
            ">
              🚀 Practice Problems
            </h2>

            <span className="
              bg-indigo-100
              dark:bg-indigo-950
              text-indigo-700
              dark:text-indigo-300
              px-4
              py-2
              rounded-xl
              font-semibold
            ">
              {currentTopic.problems.length} Questions
            </span>

          </div>


          {/* Problem List */}

          <div className="space-y-5">

            {currentTopic.problems.map((problem, index) => (

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
                  flex
                  justify-between
                  items-center
                  hover:shadow-2xl
                  transition
                "
              >

                <div>

                  <h2 className="
                    font-bold
                    text-xl
                    text-gray-900
                    dark:text-white
                  ">
                    {problem.title}
                  </h2>

                  <span
                    className={`
                      inline-block
                      mt-3
                      px-3
                      py-1
                      rounded-full
                      text-sm
                      font-semibold
                      ${
                        problem.difficulty === "Easy"
                          ? "bg-green-100 text-green-700"
                          : problem.difficulty === "Medium"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }
                    `}
                  >
                    {problem.difficulty}
                  </span>

                </div>


                <a
                  href={problem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    bg-indigo-600
                    hover:bg-indigo-700
                    text-white
                    px-6
                    py-3
                    rounded-xl
                    transition
                  "
                >
                  Solve →
                </a>

              </div>

            ))}

          </div>

        </div>


        {/* Complete Button */}

        <button
          onClick={markComplete}
          className="
            mt-10
            bg-green-600
            hover:bg-green-700
            text-white
            px-8
            py-4
            rounded-2xl
            flex
            items-center
            gap-3
          "
        >

          <FaCheckCircle />

          Mark Topic Complete (+50 XP)

        </button>

      </div>

    </Layout>
  );
}

export default LearningPage;