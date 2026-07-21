import {
  FaBullseye,
  FaCalendarAlt,
  FaTrophy,
} from "react-icons/fa";

function WeeklyGoal() {
  const solved = 15;
  const target = 20;
  const progress = (solved / target) * 100;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-md p-6 hover:shadow-xl transition-all duration-300">

      {/* Header */}
      <div className="flex justify-between items-center">

        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
            <FaBullseye className="text-indigo-600 dark:text-indigo-400" />
            Weekly Goal
          </h2>

          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            Stay consistent to achieve your weekly target.
          </p>
        </div>

        <div className="bg-indigo-100 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-full text-sm font-semibold">
          {Math.round(progress)}%
        </div>

      </div>

      {/* Progress */}
      <div className="mt-6">

        <div className="flex justify-between mb-2 text-sm">

          <span className="text-gray-600 dark:text-gray-400">
            Problems Solved
          </span>

          <span className="font-semibold text-gray-800 dark:text-white">
            {solved} / {target}
          </span>

        </div>

        <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">

          <div
            className="h-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-700"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mt-6">

        <div className="bg-gray-50 dark:bg-slate-800 rounded-xl p-4">

          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <FaCalendarAlt />
            <span className="text-sm">Days Left</span>
          </div>

          <h3 className="text-xl font-bold mt-2 text-gray-800 dark:text-white">
            2
          </h3>

        </div>

        <div className="bg-yellow-50 dark:bg-yellow-950/30 rounded-xl p-4">

          <div className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400">
            <FaTrophy />
            <span className="text-sm">Reward</span>
          </div>

          <h3 className="text-xl font-bold mt-2 text-gray-800 dark:text-white">
            +500 XP
          </h3>

        </div>

      </div>

      {/* Footer */}
      <button className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 transition text-white py-3 rounded-xl font-semibold">
        Keep Going 🚀
      </button>

    </div>
  );
}

export default WeeklyGoal;