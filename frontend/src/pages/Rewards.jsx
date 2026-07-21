import Layout from "../components/Layout";
import { useState } from "react";

import {
  FaCoins,
  FaFire,
  FaStar,
  FaTrophy,
  FaGift,
  FaLock,
} from "react-icons/fa";

function Rewards() {
  const [showNotification, setShowNotification] =
    useState(false);

  const level = 1;
  const maxXP = 500;

  const [coins, setCoins] = useState(240);
  const [xp, setXp] = useState(150);

  const streak = 7;

  const progress = (xp / maxXP) * 100;

  const claimReward = () => {
    setCoins((prev) => prev + 50);
    setXp((prev) => prev + 25);

    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  const achievements = [
    {
      id: 1,
      icon: "🎯",
      title: "First Task",
      description: "Complete your first task",
      unlocked: true,
    },
    {
      id: 2,
      icon: "🥇",
      title: "10 Tasks",
      description: "Complete 10 tasks",
      unlocked: true,
    },
    {
      id: 3,
      icon: "🔥",
      title: "7 Day Streak",
      description: "Study for 7 consecutive days",
      unlocked: true,
    },
    {
      id: 4,
      icon: "💯",
      title: "100 XP",
      description: "Earn your first 100 XP",
      unlocked: true,
    },
    {
      id: 5,
      icon: "🚀",
      title: "React Master",
      description: "Complete the React roadmap",
      unlocked: false,
    },
    {
      id: 6,
      icon: "🧠",
      title: "DSA Champion",
      description: "Solve 100 DSA problems",
      unlocked: false,
    },
  ];

  return (
    <Layout>

      {/* Notification */}

      {showNotification && (
        <div className="fixed top-5 right-5 bg-green-600 text-white px-6 py-4 rounded-xl shadow-2xl z-50 animate-bounce">

          <h3 className="font-bold">
            🎉 Daily Reward Claimed!
          </h3>

          <p>⭐ +25 XP</p>
          <p>🪙 +50 Coins</p>

        </div>
      )}


      {/* Top Cards */}

      <div className="grid lg:grid-cols-3 gap-6">

        {/* Level */}

        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-3xl p-8 shadow-xl">

          <h2 className="text-2xl font-bold">
            ⭐ Level {level}
          </h2>

          <p className="mt-4">
            {xp} / {maxXP} XP
          </p>

          <div className="w-full bg-white/30 rounded-full h-4 mt-5">

            <div
              className="bg-white h-4 rounded-full transition-all duration-500"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

        </div>


        {/* Coins */}

        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl p-8 transition-colors">

          <div className="flex items-center gap-4">

            <FaCoins className="text-yellow-500 text-5xl" />

            <div>

              <h2 className="text-gray-500 dark:text-gray-400">
                Coins
              </h2>

              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                {coins}
              </h1>

            </div>

          </div>

        </div>


        {/* Streak */}

        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl p-8 transition-colors">

          <div className="flex items-center gap-4">

            <FaFire className="text-red-500 text-5xl" />

            <div>

              <h2 className="text-gray-500 dark:text-gray-400">
                Study Streak
              </h2>

              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                {streak} Days
              </h1>

            </div>

          </div>

        </div>

      </div>


      {/* Achievements */}

      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl mt-10 p-8 transition-colors">

        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
          🏅 Achievements
        </h2>


        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {achievements.map((achievement) => (

            <div
              key={achievement.id}
              className={`rounded-2xl p-6 border transition hover:shadow-lg ${
                achievement.unlocked
                  ? "bg-indigo-50 dark:bg-indigo-900/30 border-indigo-200 dark:border-indigo-800"
                  : "bg-gray-100 dark:bg-slate-800 border-gray-200 dark:border-slate-700 opacity-70"
              }`}
            >

              <div className="flex justify-between">

                <span className="text-5xl">
                  {achievement.icon}
                </span>

                {achievement.unlocked ? (
                  <FaTrophy className="text-yellow-500 text-2xl" />
                ) : (
                  <FaLock className="text-gray-400 text-2xl" />
                )}

              </div>


              <h2 className="text-2xl font-bold mt-5 text-gray-900 dark:text-white">
                {achievement.title}
              </h2>


              <p className="text-gray-500 dark:text-gray-400 mt-2">
                {achievement.description}
              </p>


              <span
                className={`inline-block mt-5 px-4 py-2 rounded-full text-sm font-semibold ${
                  achievement.unlocked
                    ? "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300"
                    : "bg-gray-200 dark:bg-slate-700 text-gray-600 dark:text-gray-300"
                }`}
              >
                {achievement.unlocked
                  ? "Unlocked ✅"
                  : "Locked 🔒"}
              </span>

            </div>

          ))}

        </div>

      </div>


      {/* Daily Reward */}

      <div className="bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-3xl shadow-xl mt-10 p-8 flex flex-col md:flex-row justify-between items-center gap-6">

        <div>

          <h2 className="text-3xl font-bold">
            🎁 Daily Reward
          </h2>

          <p className="mt-2">
            Login every day to earn bonus XP.
          </p>

        </div>


        <button
          onClick={claimReward}
          className="bg-white text-pink-600 font-bold px-8 py-3 rounded-2xl hover:scale-105 transition"
        >
          Claim
        </button>

      </div>


      {/* Reward Shop */}

      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl mt-10 p-8 transition-colors">

        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          🛍 Reward Shop
        </h2>


        <div className="grid md:grid-cols-3 gap-6">

          {/* Premium Badge */}

          <div className="border border-gray-200 dark:border-slate-700 rounded-2xl p-6 text-center">

            <FaStar className="text-yellow-500 text-5xl mx-auto" />

            <h2 className="font-bold text-xl mt-4 text-gray-900 dark:text-white">
              Premium Badge
            </h2>

            <p className="text-gray-500 dark:text-gray-400 mt-2">
              500 Coins
            </p>

          </div>


          {/* Surprise Box */}

          <div className="border border-gray-200 dark:border-slate-700 rounded-2xl p-6 text-center">

            <FaGift className="text-pink-500 text-5xl mx-auto" />

            <h2 className="font-bold text-xl mt-4 text-gray-900 dark:text-white">
              Surprise Box
            </h2>

            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Coming Soon
            </p>

          </div>


          {/* Elite Rank */}

          <div className="border border-gray-200 dark:border-slate-700 rounded-2xl p-6 text-center">

            <FaTrophy className="text-indigo-600 text-5xl mx-auto" />

            <h2 className="font-bold text-xl mt-4 text-gray-900 dark:text-white">
              Elite Rank
            </h2>

            <p className="text-gray-500 dark:text-gray-400 mt-2">
              1000 Coins
            </p>

          </div>

        </div>

      </div>

    </Layout>
  );
}

export default Rewards;