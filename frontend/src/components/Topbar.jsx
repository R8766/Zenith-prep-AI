import {
  FaBell,
  FaSearch,
} from "react-icons/fa";

import { useTheme } from "next-themes";

function Topbar() {
  const { theme, setTheme } = useTheme();

  const name = localStorage.getItem("name") || "Renu";

  const avatar =
    localStorage.getItem("photo") ||
    `https://ui-avatars.com/api/?name=${name}`;

  return (
    <div className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 shadow-sm px-6 py-4 transition-colors duration-300">

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        {/* Welcome */}
        <div className="hidden xl:block">

          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            👋 Welcome, {name}
          </h1>

          <p className="mt-1 text-gray-500 dark:text-gray-400">
            Keep learning. You're getting closer to your dream job 🇯🇵
          </p>

        </div>

        {/* Right Side */}
        <div className="flex flex-wrap items-center justify-end gap-4">

          {/* Search */}
          <div className="relative w-full sm:w-72 lg:w-80">

            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />

            <input
              type="text"
              placeholder="Search..."
              className="
                w-full
                pl-11
                pr-4
                py-3
                rounded-2xl
                border
                border-gray-200
                dark:border-slate-700
                bg-white
                dark:bg-slate-800
                text-gray-900
                dark:text-white
                placeholder:text-gray-400
                dark:placeholder:text-gray-500
                outline-none
                focus:ring-2
                focus:ring-indigo-500
                transition-colors
              "
            />

          </div>

          {/* Theme Selector */}
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="
              rounded-xl
              border
              border-gray-300
              dark:border-slate-700
              bg-white
              dark:bg-slate-800
              text-gray-900
              dark:text-white
              px-4
              py-2
              transition-colors
            "
          >
            <option value="light">☀ Light</option>
            <option value="dark">🌙 Dark</option>
            <option value="system">💻 System</option>
          </select>

          {/* Notification */}
          <button
            className="
              relative
              w-12
              h-12
              rounded-2xl
              bg-gray-100
              dark:bg-slate-800
              flex
              items-center
              justify-center
              hover:scale-105
              transition
            "
          >
            <FaBell className="text-gray-600 dark:text-gray-300" />

            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>

          </button>

          {/* Avatar */}
          <div className="flex items-center gap-3">

            <img
              src={avatar}
              alt="profile"
              className="w-12 h-12 rounded-full border-2 border-indigo-500"
            />

            <div className="hidden sm:block">

              <h3 className="font-semibold text-gray-900 dark:text-white">
                {name}
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                Software Engineer 🚀
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Topbar;