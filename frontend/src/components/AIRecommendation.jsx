import {
  FaRobot,
  FaArrowRight,
  FaClock,
  FaSignal,
  FaLightbulb,
} from "react-icons/fa";

function AIRecommendation() {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-md p-6 hover:shadow-xl transition-all duration-300">

      {/* Header */}
      <div className="flex items-center gap-3">

        <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-950/50 flex items-center justify-center">
          <FaRobot className="text-2xl text-indigo-600 dark:text-indigo-400" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            AI Study Coach
          </h2>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Personalized recommendation based on your progress
          </p>
        </div>

      </div>

      {/* Recommendation */}
      <div className="mt-6">

        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
          Continue Binary Search
        </h3>

        <p className="text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
          Great job completing Arrays! Binary Search is the perfect next topic
          and is frequently asked in placement interviews.
        </p>

      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mt-6">

        <div className="bg-indigo-50 dark:bg-indigo-950/40 rounded-xl p-4">

          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
            <FaSignal />
            <span className="font-semibold">Difficulty</span>
          </div>

          <p className="mt-2 font-bold text-lg text-gray-800 dark:text-white">
            Medium
          </p>

        </div>

        <div className="bg-green-50 dark:bg-green-950/40 rounded-xl p-4">

          <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
            <FaClock />
            <span className="font-semibold">Time</span>
          </div>

          <p className="mt-2 font-bold text-lg text-gray-800 dark:text-white">
            20 mins
          </p>

        </div>

      </div>

      {/* AI Tip */}
      <div className="mt-6 bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 rounded-xl p-4">

        <div className="flex items-start gap-3">

          <FaLightbulb className="text-yellow-500 mt-1" />

          <div>

            <h4 className="font-semibold text-gray-800 dark:text-white">
              AI Tip
            </h4>

            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              Focus on understanding the search space instead of memorizing the
              code. This will help you solve "Binary Search on Answer"
              problems much faster.
            </p>

          </div>

        </div>

      </div>

      {/* Footer */}
      <div className="mt-6 flex justify-between items-center">

        <span className="text-sm text-gray-500 dark:text-gray-400">
          ⭐ Confidence: 92%
        </span>

        <button className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-xl hover:bg-indigo-700 transition-all">
          Start Learning
          <FaArrowRight />
        </button>

      </div>

    </div>
  );
}

export default AIRecommendation;