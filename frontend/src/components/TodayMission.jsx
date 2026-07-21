import { FaCheckCircle, FaRegCircle, FaGift } from "react-icons/fa";

function TodayMission() {
  const missions = [
    {
      title: "Solve 2 LeetCode Problems",
      completed: true,
    },
    {
      title: "Complete Binary Search",
      completed: false,
    },
    {
      title: "Revise DBMS",
      completed: false,
    },
  ];

  const completedCount = missions.filter(
    (mission) => mission.completed
  ).length;

  const progress = (completedCount / missions.length) * 100;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-md p-6 hover:shadow-xl transition-all duration-300">

      {/* Header */}
      <div className="flex justify-between items-center">

        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            🎯 Today's Mission
          </h2>

          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            Complete your daily goals and earn XP.
          </p>
        </div>

        <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
          {completedCount}/{missions.length} Done
        </span>

      </div>

      {/* Progress Bar */}
      <div className="mt-5">

        <div className="w-full h-2 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">

          <div
            className="bg-indigo-600 h-2 rounded-full transition-all duration-700"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>

      {/* Mission List */}
      <div className="space-y-4 mt-6">

        {missions.map((mission, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-800 transition"
          >

            <div className="flex items-center gap-3">

              {mission.completed ? (
                <FaCheckCircle className="text-green-500 text-lg" />
              ) : (
                <FaRegCircle className="text-gray-400 dark:text-gray-500 text-lg" />
              )}

              <span
                className={`${
                  mission.completed
                    ? "line-through text-gray-400 dark:text-gray-500"
                    : "text-gray-700 dark:text-gray-200"
                }`}
              >
                {mission.title}
              </span>

            </div>

            {mission.completed && (
              <span className="text-green-600 dark:text-green-400 text-sm font-semibold">
                +30 XP
              </span>
            )}

          </div>
        ))}

      </div>

      {/* Reward Section */}
      <div className="mt-6 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl p-4 flex justify-between items-center">

        <div className="flex items-center gap-3">

          <FaGift className="text-indigo-600 dark:text-indigo-400 text-2xl" />

          <div>

            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Daily Reward
            </p>

            <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
              +100 XP
            </h3>

          </div>

        </div>

        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
          Claim
        </button>

      </div>

    </div>
  );
}

export default TodayMission;