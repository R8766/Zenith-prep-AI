import user from "../data/user";

function ProfileCard() {
  const xpNeeded = user.level * 100;

  const percentage = Math.min((user.xp / xpNeeded) * 100, 100);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-8 transition-colors duration-300">

      <div className="flex flex-col items-center">

        <img
          src="https://ui-avatars.com/api/?name=Renu+Wakode&background=4f46e5&color=fff&size=128"
          alt="avatar"
          className="w-28 h-28 rounded-full"
        />

        <h2 className="text-2xl font-bold mt-4 text-gray-900 dark:text-white">
          {user.name}
        </h2>

        <p className="text-gray-500 dark:text-gray-400">
          Level {user.level}
        </p>

      </div>

      {/* XP Progress */}

      <div className="mt-6">

        <div className="w-full bg-gray-200 dark:bg-slate-700 h-3 rounded-full">

          <div
            className="bg-indigo-600 h-3 rounded-full transition-all duration-500"
            style={{
              width: `${percentage}%`,
            }}
          />

        </div>

        <p className="mt-3 text-gray-700 dark:text-gray-300">
          {user.xp} / {xpNeeded} XP
        </p>

      </div>

    </div>
  );
}

export default ProfileCard;