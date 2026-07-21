function Heatmap() {
  const activity = {
    "2026-01-05": 1,
    "2026-01-06": 2,
    "2026-01-12": 3,
    "2026-01-20": 1,
    "2026-02-03": 2,
    "2026-02-15": 3,
    "2026-03-10": 1,
    "2026-03-22": 2,
    "2026-04-05": 3,
    "2026-04-18": 1,
    "2026-05-02": 2,
    "2026-05-15": 3,
    "2026-06-08": 1,
    "2026-06-20": 2,
    "2026-07-04": 3,
    "2026-07-10": 1,
    "2026-07-15": 2,
    "2026-07-20": 3,
  };

  const getColor = (level) => {
    if (level === 0) return "bg-gray-200 dark:bg-slate-800";
    if (level === 1) return "bg-green-200";
    if (level === 2) return "bg-green-400";
    if (level === 3) return "bg-green-600";

    return "bg-gray-200 dark:bg-slate-800";
  };

  const startDate = new Date("2026-01-01");
  const endDate = new Date("2026-07-31");

  const weeks = [];
  let currentDate = new Date(startDate);

  // Move to Sunday
  currentDate.setDate(
    currentDate.getDate() - currentDate.getDay()
  );

  while (currentDate <= endDate) {
    const week = [];

    for (let day = 0; day < 7; day++) {
      const date = new Date(currentDate);

      const dateString = date.toISOString().split("T")[0];

      const isInsideRange =
        date >= startDate && date <= endDate;

      week.push({
        date: dateString,
        level: isInsideRange
          ? activity[dateString] || 0
          : null,
      });

      currentDate.setDate(currentDate.getDate() + 1);
    }

    weeks.push(week);
  }

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 transition-colors">

      {/* Heading */}

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        🔥 Learning Activity
      </h2>

      {/* Heatmap */}

      <div className="overflow-x-auto">

        <div className="flex gap-1 min-w-max">

          {/* Day Labels */}

          <div className="flex flex-col gap-1 mr-2 pt-5">

            <span className="text-xs text-gray-500 h-4">
              Sun
            </span>

            <span className="text-xs text-gray-500 h-4">
              Mon
            </span>

            <span className="text-xs text-gray-500 h-4">
              Tue
            </span>

            <span className="text-xs text-gray-500 h-4">
              Wed
            </span>

            <span className="text-xs text-gray-500 h-4">
              Thu
            </span>

            <span className="text-xs text-gray-500 h-4">
              Fri
            </span>

            <span className="text-xs text-gray-500 h-4">
              Sat
            </span>

          </div>

          {/* Weeks */}

          {weeks.map((week, weekIndex) => (

            <div
              key={weekIndex}
              className="flex flex-col gap-1"
            >

              {/* Month Label */}

              <div className="h-4 text-xs text-gray-500">

                {week[0].date.endsWith("-01") &&
                  new Date(week[0].date).toLocaleString(
                    "default",
                    { month: "short" }
                  )}

              </div>

              {/* Days */}

              {week.map((day) => (

                <div
                  key={day.date}
                  title={day.date}
                  className={`w-4 h-4 rounded ${
                    day.level === null
                      ? "bg-transparent"
                      : getColor(day.level)
                  }`}
                />

              ))}

            </div>

          ))}

        </div>

      </div>

      {/* Legend */}

      <div className="flex items-center gap-2 mt-6 text-sm text-gray-500 dark:text-gray-400">

        <span>Less</span>

        <div className="w-4 h-4 rounded bg-gray-200 dark:bg-slate-800" />

        <div className="w-4 h-4 rounded bg-green-200" />

        <div className="w-4 h-4 rounded bg-green-400" />

        <div className="w-4 h-4 rounded bg-green-600" />

        <span>More</span>

      </div>

      <p className="text-gray-500 dark:text-gray-400 mt-5">
        Your learning activity throughout the year.
      </p>

    </div>
  );
}

export default Heatmap;