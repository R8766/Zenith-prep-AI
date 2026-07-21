import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function FeatureCard({
  icon,
  title,
  subtitle,
  color,
  route,
  progress = 0,
}) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(route)}
      className="
        group
        bg-white dark:bg-slate-900
        rounded-2xl
        border border-gray-200 dark:border-slate-700
        p-5 md:p-6
        shadow-sm dark:shadow-black/30
        hover:shadow-2xl
        hover:-translate-y-2
        transition-all duration-300
        cursor-pointer
      "
    >

      {/* Icon */}
      <div
        className={`
          w-14 h-14
          rounded-xl
          flex items-center justify-center
          text-white text-2xl
          ${color}
          group-hover:scale-110
          transition-transform duration-300
        `}
      >
        {icon}
      </div>

      {/* Title */}
      <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mt-5">
        {title}
      </h2>

      {/* Subtitle */}
      <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base mt-2 leading-relaxed">
        {subtitle}
      </p>

      {/* Progress */}
      <div className="mt-6">

        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-2">

          <span>Progress</span>

          <span className="font-semibold">
            {progress}%
          </span>

        </div>

        {/* Progress Background */}
        <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">

          {/* Progress */}
          <div
            className="bg-indigo-600 h-2 rounded-full transition-all duration-700"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-6">

        <span className="text-sm text-gray-500 dark:text-gray-400">

          {progress >= 100
            ? "Completed 🎉"
            : `${100 - progress}% Remaining`}

        </span>

        <button
          className="
            flex items-center gap-2
            text-indigo-600 dark:text-indigo-400
            font-semibold
            group-hover:gap-3
            transition-all
          "
        >
          Continue

          <FaArrowRight className="text-sm" />

        </button>

      </div>

    </div>
  );
}

export default FeatureCard;