import user from "../data/user";
import { FaFire, FaCoins, FaStar } from "react-icons/fa";

function XPBar() {
  const xpNeeded = user.level * 100;
  const progress = Math.min((user.xp / xpNeeded) * 100, 100);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-md dark:shadow-black/30 border border-gray-200 dark:border-slate-700 p-6 mt-6 hover:shadow-xl transition-all duration-300">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        {/* Level */}
        <div>
          <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-800 dark:text-white">
            <FaStar className="text-yellow-500" />
            Level {user.level}
          </h2>

          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Keep solving questions to level up!
          </p>
        </div>

        {/* Streak and Coins */}
        <div className="flex gap-6">

          <div className="flex items-center gap-2">

            <FaFire className="text-orange-500 text-xl" />

            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Streak
              </p>

              <p className="font-bold text-gray-900 dark:text-white">
                {user.streak || 15} Days
              </p>
            </div>

          </div>

          <div className="flex items-center gap-2">

            <FaCoins className="text-yellow-500 text-xl" />

            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Coins
              </p>

              <p className="font-bold text-gray-900 dark:text-white">
                {user.coins}
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* XP */}
      <div className="mt-8">

        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-2">

          <span>Experience</span>

          <span>
            {user.xp} / {xpNeeded} XP
          </span>

        </div>

        {/* Progress Background */}
        <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">

          {/* Progress */}
          <div
            className="h-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-1000"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-6 text-sm">

        <span className="text-gray-500 dark:text-gray-400">
          {xpNeeded - user.xp} XP to reach Level {user.level + 1}
        </span>

        <span className="font-semibold text-indigo-600 dark:text-indigo-400">
          {progress.toFixed(0)}% Completed
        </span>

      </div>

    </div>
  );
}

export default XPBar;