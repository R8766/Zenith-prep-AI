import { useState, useEffect } from "react";
import axios from "axios";

import Layout from "../components/Layout";
import AddTaskModal from "../components/AddTaskModal";
import EditTaskModal from "../components/EditTaskModal";

import {
  FaSearch,
  FaPlus,
  FaCheckCircle,
  FaRegCircle,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

function Tasks() {
  const [tasks, setTasks] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [editModal, setEditModal] = useState(false);

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] =
    useState("All Categories");

  const [difficultyFilter, setDifficultyFilter] =
    useState("All Difficulty");

  const API_URL = "https://zenith-prep.onrender.com";

  // =========================
  // GET TASKS
  // =========================

  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        `${API_URL}/tasks`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTasks(response.data);

    } catch (error) {
      console.log(
        "Error fetching tasks:",
        error.response?.data || error.message
      );
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // =========================
  // CREATE TASK
  // =========================

  const addTask = async (newTask) => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        `${API_URL}/tasks`,
        newTask,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setTasks((prev) => [
        response.data.task,
        ...prev,
      ]);

      setShowModal(false);

    } catch (error) {
      console.log(
        "Error creating task:",
        error.response?.data || error.message
      );
    }
  };

  // =========================
  // DELETE TASK
  // =========================

  const deleteTask = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await axios.delete(
        `${API_URL}/tasks/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Remove from frontend immediately
      setTasks((prev) =>
        prev.filter((task) => task._id !== id)
      );

    } catch (error) {
      console.log(
        "Error deleting task:",
        error.response?.data || error.message
      );
    }
  };

  // =========================
  // COMPLETE / UNCOMPLETE TASK
  // =========================

  const toggleComplete = async (id) => {
    try {
      const token = localStorage.getItem("token");

      const currentTask = tasks.find(
        (task) => task._id === id
      );

      if (!currentTask) return;

      const updatedTask = {
        title: currentTask.title,
        category: currentTask.category,
        difficulty: currentTask.difficulty,
        xp: currentTask.xp,
        completed: !currentTask.completed,
      };

      const response = await axios.put(
        `${API_URL}/tasks/${id}`,
        updatedTask,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setTasks((prev) =>
        prev.map((task) =>
          task._id === id
            ? response.data.task
            : task
        )
      );

    } catch (error) {
      console.log(
        "Error updating task:",
        error.response?.data || error.message
      );
    }
  };

  // =========================
  // EDIT TASK
  // =========================

  const updateTask = async (updatedTask) => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.put(
        `${API_URL}/tasks/${updatedTask._id}`,
        updatedTask,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setTasks((prev) =>
        prev.map((task) =>
          task._id === updatedTask._id
            ? response.data.task
            : task
        )
      );

      setEditModal(false);
      setEditingTask(null);

    } catch (error) {
      console.log(
        "Error updating task:",
        error.response?.data || error.message
      );
    }
  };

  // =========================
  // FILTERING
  // =========================

  const completed = tasks.filter(
    (task) => task.completed
  ).length;

  const progress =
    tasks.length > 0
      ? (completed / tasks.length) * 100
      : 0;

  const filteredTasks = tasks.filter((task) => {

    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      categoryFilter === "All Categories" ||
      task.category === categoryFilter;

    const matchesDifficulty =
      difficultyFilter === "All Difficulty" ||
      task.difficulty === difficultyFilter;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesDifficulty
    );
  });

  return (
    <Layout>

      {/* HEADER */}

      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">

        <div>

          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
            📋 Tasks
          </h1>

          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Manage your daily placement preparation.
          </p>

        </div>

        <button
          onClick={() => setShowModal(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-xl flex items-center gap-2 shadow"
        >
          <FaPlus />
          Add Task
        </button>

      </div>


      {/* STATS */}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow p-5">

          <p className="text-gray-500 dark:text-gray-400">
            Total Tasks
          </p>

          <h2 className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">
            {tasks.length}
          </h2>

        </div>


        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow p-5">

          <p className="text-gray-500 dark:text-gray-400">
            Completed
          </p>

          <h2 className="text-3xl font-bold text-green-600 mt-2">
            {completed}
          </h2>

        </div>


        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow p-5">

          <p className="text-gray-500 dark:text-gray-400">
            Pending
          </p>

          <h2 className="text-3xl font-bold text-orange-500 mt-2">
            {tasks.length - completed}
          </h2>

        </div>


        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow p-5">

          <p className="text-gray-500 dark:text-gray-400">
            Progress
          </p>

          <h2 className="text-3xl font-bold text-indigo-600 mt-2">
            {Math.round(progress)}%
          </h2>

        </div>

      </div>


      {/* SEARCH AND FILTERS */}

      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow p-5 mb-8">

        <div className="grid lg:grid-cols-4 gap-4">

          <div className="relative lg:col-span-2">

            <FaSearch className="absolute left-4 top-4 text-gray-400" />

            <input
              type="text"
              placeholder="Search tasks..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="
                w-full
                border
                border-gray-200
                dark:border-slate-700
                rounded-xl
                py-3
                pl-12
                pr-4
                bg-white
                dark:bg-slate-800
                text-gray-900
                dark:text-white
                placeholder:text-gray-400
                outline-none
                focus:ring-2
                focus:ring-indigo-500
              "
            />

          </div>


          <select
            value={categoryFilter}
            onChange={(e) =>
              setCategoryFilter(e.target.value)
            }
            className="
              border
              border-gray-200
              dark:border-slate-700
              rounded-xl
              px-4
              py-3
              bg-white
              dark:bg-slate-800
              text-gray-900
              dark:text-white
              focus:outline-none
              focus:ring-2
              focus:ring-indigo-500
            "
          >
            <option>All Categories</option>
            <option>DSA</option>
            <option>Development</option>
            <option>CS Subjects</option>
            <option>Aptitude</option>
          </select>


          <select
            value={difficultyFilter}
            onChange={(e) =>
              setDifficultyFilter(e.target.value)
            }
            className="
              border
              border-gray-200
              dark:border-slate-700
              rounded-xl
              px-4
              py-3
              bg-white
              dark:bg-slate-800
              text-gray-900
              dark:text-white
              focus:outline-none
              focus:ring-2
              focus:ring-indigo-500
            "
          >
            <option>All Difficulty</option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>

        </div>

      </div>


      {/* TASK LIST */}

      <div className="space-y-5">

        {filteredTasks.map((task) => (

          <div
            key={task._id}
            className="
              bg-white
              dark:bg-slate-900
              rounded-2xl
              shadow
              p-6
              flex
              flex-col
              lg:flex-row
              lg:justify-between
              lg:items-center
              gap-5
            "
          >

            {/* LEFT SIDE */}

            <div className="flex items-start gap-4">

              <button
                onClick={() =>
                  toggleComplete(task._id)
                }
              >

                {task.completed ? (

                  <FaCheckCircle className="text-green-500 text-2xl mt-1 hover:scale-110 transition" />

                ) : (

                  <FaRegCircle className="text-gray-400 text-2xl mt-1 hover:text-green-500 transition" />

                )}

              </button>


              <div>

                <h2
                  className={`text-xl font-semibold ${
                    task.completed
                      ? "line-through text-gray-400"
                      : "text-gray-800 dark:text-white"
                  }`}
                >
                  {task.title}
                </h2>


                <div className="flex gap-2 mt-3 flex-wrap">

                  <span className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300 px-3 py-1 rounded-full text-sm">
                    {task.category}
                  </span>

                  <span className="bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300 px-3 py-1 rounded-full text-sm">
                    {task.difficulty}
                  </span>

                  <span className="bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300 px-3 py-1 rounded-full text-sm">
                    +{task.xp} XP
                  </span>

                </div>

              </div>

            </div>


            {/* RIGHT SIDE */}

            <div className="flex gap-3">

              <button
                onClick={() => {
                  setEditingTask(task);
                  setEditModal(true);
                }}
                className="bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 p-3 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/60 transition"
              >
                <FaEdit />
              </button>


              <button
                onClick={() =>
                  deleteTask(task._id)
                }
                className="bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-300 p-3 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/60 transition"
              >
                <FaTrash />
              </button>

            </div>

          </div>

        ))}


        {/* EMPTY STATE */}

        {filteredTasks.length === 0 && (

          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow p-10 text-center">

            <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200">
              No Tasks Found 🔍
            </h2>

            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Try changing your search or filter options.
            </p>

          </div>

        )}

      </div>


      {/* PROGRESS */}

      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow p-6 mt-8">

        <div className="flex justify-between mb-3">

          <h2 className="text-xl font-bold text-gray-800 dark:text-white">
            Today's Progress
          </h2>

          <span className="font-semibold text-gray-800 dark:text-white">
            {completed}/{tasks.length}
          </span>

        </div>


        <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">

          <div
            className="bg-indigo-600 h-3 rounded-full transition-all duration-500"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>


        <p className="mt-3 text-gray-500 dark:text-gray-400">
          Keep going! You're making great progress. 🚀
        </p>

      </div>


      {/* MODALS */}

      <AddTaskModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onAddTask={addTask}
      />

      <EditTaskModal
        isOpen={editModal}
        onClose={() => setEditModal(false)}
        task={editingTask}
        onSave={updateTask}
      />

    </Layout>
  );
}

export default Tasks;