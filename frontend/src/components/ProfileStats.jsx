import user from "../data/user";

function ProfileStats() {
  return (
    <div className="grid md:grid-cols-4 gap-6">

      {/* Coins */}

      <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-5 transition-colors duration-300">

        <h2 className="text-3xl">
          🪙
        </h2>

        <p className="font-bold mt-2 text-gray-900 dark:text-white">
          {user.coins}
        </p>

        <p className="text-gray-500 dark:text-gray-400">
          Coins
        </p>

      </div>


      {/* Streak */}

      <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-5 transition-colors duration-300">

        <h2 className="text-3xl">
          🔥
        </h2>

        <p className="font-bold mt-2 text-gray-900 dark:text-white">
          {user.streak}
        </p>

        <p className="text-gray-500 dark:text-gray-400">
          Day Streak
        </p>

      </div>


      {/* Problems Solved */}

      <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-5 transition-colors duration-300">

        <h2 className="text-3xl">
          ✅
        </h2>

        <p className="font-bold mt-2 text-gray-900 dark:text-white">
          {user.solved}
        </p>

        <p className="text-gray-500 dark:text-gray-400">
          Problems Solved
        </p>

      </div>


      {/* Level */}

      <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-5 transition-colors duration-300">

        <h2 className="text-3xl">
          🏆
        </h2>

        <p className="font-bold mt-2 text-gray-900 dark:text-white">
          Level {user.level}
        </p>

        <p className="text-gray-500 dark:text-gray-400">
          Current Level
        </p>

      </div>

    </div>
  );
}

export default ProfileStats;