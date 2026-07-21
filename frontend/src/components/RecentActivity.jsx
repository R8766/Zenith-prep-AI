import {
  FaCheckCircle,
  FaClock,
  FaArrowUp,
} from "react-icons/fa";

const activities = [
  {
    title: "Solved Two Sum",
    category: "DSA",
    xp: "+20 XP",
    time: "2 hours ago",
  },
  {
    title: "Completed Arrays",
    category: "Roadmap",
    xp: "+50 XP",
    time: "Yesterday",
  },
  {
    title: "Started React Hooks",
    category: "Development",
    xp: "+15 XP",
    time: "Yesterday",
  },
  {
    title: "Revised DBMS",
    category: "CS Subject",
    xp: "+30 XP",
    time: "2 days ago",
  },
];

function RecentActivity() {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-700 shadow-md p-6 hover:shadow-xl transition-all duration-300">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">

        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            📈 Recent Activity
          </h2>

          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            Your latest learning progress
          </p>
        </div>

        <button className="text-indigo-600 dark:text-indigo-400 text-sm font-semibold hover:text-indigo-700 dark:hover:text-indigo-300">
          View All
        </button>

      </div>

      {/* Activity List */}
      <div className="space-y-4 max-h-80 overflow-y-auto pr-2">

        {activities.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-4 rounded-xl border border-gray-100 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800 transition"
          >

            <div className="flex items-start gap-4">

              <div className="mt-1">
                <FaCheckCircle className="text-green-500 text-xl" />
              </div>

              <div>

                <h3 className="font-semibold text-gray-800 dark:text-white">
                  {item.title}
                </h3>

                <div className="flex gap-2 mt-2 flex-wrap">

                  <span className="bg-indigo-100 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 text-xs px-2 py-1 rounded-full">
                    {item.category}
                  </span>

                  <span className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-xs">
                    <FaClock />
                    {item.time}
                  </span>

                </div>

              </div>

            </div>

            <div className="text-right">

              <p className="text-green-600 dark:text-green-400 font-semibold flex items-center gap-1 justify-end">
                <FaArrowUp className="text-xs" />
                {item.xp}
              </p>

              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Completed
              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default RecentActivity;