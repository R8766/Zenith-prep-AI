function RoadmapCard({ title, progress }) {

    let status = "Not Started";
    let badgeColor = "bg-gray-500";

    if (progress === 100) {
        status = "Completed";
        badgeColor = "bg-green-500";
    } else if (progress > 0) {
        status = "In Progress";
        badgeColor = "bg-yellow-500";
    }

    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">

            <div className="flex justify-between items-center">

                <h2 className="text-xl font-bold">
                    {title}
                </h2>

                <span className={`${badgeColor} text-white px-3 py-1 rounded-full text-sm`}>
                    {status}
                </span>

            </div>

            <div className="w-full bg-gray-200 h-3 rounded-full mt-5">

                <div
                    className="bg-indigo-600 h-3 rounded-full"
                    style={{ width: `${progress}%` }}
                ></div>

            </div>

            <p className="mt-4 font-semibold">
                {progress}% Complete
            </p>

        </div>
    );
}

export default RoadmapCard;