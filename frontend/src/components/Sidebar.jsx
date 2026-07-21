import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import {
  FaHome,
  FaBook,
  FaTasks,
  FaUser,
  FaGift,
  FaSignOutAlt,
  FaGraduationCap,
  FaBars,
  FaFire,
  FaStar,
  FaCoins,
} from "react-icons/fa";

function Sidebar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const menu = [
    {
      name: "Dashboard",
      path: "/home",
      icon: <FaHome />,
    },
    {
      name: "Learning Hub",
      path: "/topics",
      icon: <FaBook />,
    },
    {
      name: "Tasks",
      path: "/tasks",
      icon: <FaTasks />,
    },
    {
      name: "Rewards",
      path: "/rewards",
      icon: <FaGift />,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <FaUser />,
    },
  ];

  return (
    <>
      {/* Mobile Menu Button */}

      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed top-5 left-5 z-50 bg-indigo-600 text-white p-3 rounded-xl shadow-lg"
      >
        <FaBars />
      </button>

      {/* Mobile Overlay */}

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
        />
      )}

      {/* Sidebar */}

      <aside
        className={`fixed top-0 left-0 z-40 h-screen w-72
        bg-white dark:bg-slate-900
        border-r border-gray-200 dark:border-slate-700
        flex flex-col shadow-xl
        transition-all duration-300

        ${
          open
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >

        {/* Mobile Close Button */}

        <div className="lg:hidden flex justify-end p-4">

          <button
            onClick={() => setOpen(false)}
            className="text-2xl font-bold text-gray-700 dark:text-gray-300"
          >
            ✕
          </button>

        </div>

        {/* Logo */}

        <div className="p-6">

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg">

              <FaGraduationCap className="text-white text-2xl" />

            </div>

            <div>

              <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                Zenith
              </h1>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                Placement Prep
              </p>

            </div>

          </div>

        </div>

        {/* Menu */}

        <div className="flex-1 px-4 mt-4">

          {menu.map((item) => (

            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-4 px-5 py-4 rounded-2xl mb-3 font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                    : "text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400"
                }`
              }
            >

              <span className="text-xl">
                {item.icon}
              </span>

              {item.name}

            </NavLink>

          ))}

        </div>

        {/* Progress Card */}

        <div className="mx-5 mb-5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-5 text-white shadow-lg">

          <h2 className="font-bold text-lg mb-4">
            Your Progress
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between items-center">

              <div className="flex items-center gap-2">
                <FaFire />
                <span>Streak</span>
              </div>

              <span className="font-bold">
                7 Days
              </span>

            </div>

            <div className="flex justify-between items-center">

              <div className="flex items-center gap-2">
                <FaStar />
                <span>XP</span>
              </div>

              <span className="font-bold">
                540
              </span>

            </div>

            <div className="flex justify-between items-center">

              <div className="flex items-center gap-2">
                <FaCoins />
                <span>Coins</span>
              </div>

              <span className="font-bold">
                240
              </span>

            </div>

          </div>

        </div>

        {/* Logout */}

        <div className="px-5 pb-6">

          <button
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("name");
              localStorage.removeItem("photo");

              navigate("/");
            }}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-2xl flex items-center justify-center gap-3 font-semibold transition"
          >

            <FaSignOutAlt />

            Logout

          </button>

        </div>

      </aside>

    </>
  );
}

export default Sidebar;