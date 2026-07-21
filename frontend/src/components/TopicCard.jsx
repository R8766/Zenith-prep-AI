import { FaArrowRight } from "react-icons/fa";

function TopicCard({ title, progress, color, problems }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">

      <div className="flex justify-between items-center">

        <h2 className="text-xl font-bold">
          {title}
        </h2>

        <span className="font-semibold">
          {progress}%
        </span>

      </div>

      <div className="w-full h-3 bg-gray-200 rounded-full mt-5">

        <div
          className={`${color} h-3 rounded-full`}
          style={{ width: `${progress}%` }}
        />

      </div>

      <p className="mt-5 text-gray-500">

        {problems} Problems

      </p>

      <button className="mt-5 text-indigo-600 font-semibold flex items-center gap-2">

        View Roadmap

        <FaArrowRight />

      </button>

    </div>
  );
}

export default TopicCard;