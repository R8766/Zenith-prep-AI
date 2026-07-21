import { useState } from "react";

function AddTaskModal({
  isOpen,
  onClose,
  onAddTask,
}) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("DSA");
  const [difficulty, setDifficulty] = useState("Easy");
  const [xp, setXp] = useState(20);

  if (!isOpen) return null;

  const addTask = () => {
    if (!title.trim()) return;

    onAddTask({
      title,
      category,
      difficulty,
      xp,
    });

    setTitle("");
    setCategory("DSA");
    setDifficulty("Easy");
    setXp(20);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">

      <div className="
        bg-white
        dark:bg-slate-900
        text-gray-900
        dark:text-white
        rounded-2xl
        p-8
        w-full
        max-w-[450px]
        shadow-2xl
        transition-colors
      ">

        <h2 className="text-2xl font-bold mb-6">
          Add New Task
        </h2>

        {/* Title */}

        <label className="block text-sm font-medium mb-2">
          Task Title
        </label>

        <input
          type="text"
          placeholder="Enter task title"
          className="
            border
            border-gray-200
            dark:border-slate-700
            bg-white
            dark:bg-slate-800
            text-gray-900
            dark:text-white
            placeholder:text-gray-400
            w-full
            p-3
            rounded-xl
            mb-4
            outline-none
            focus:ring-2
            focus:ring-indigo-500
          "
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Category */}

        <label className="block text-sm font-medium mb-2">
          Category
        </label>

        <select
          className="
            border
            border-gray-200
            dark:border-slate-700
            bg-white
            dark:bg-slate-800
            text-gray-900
            dark:text-white
            w-full
            p-3
            rounded-xl
            mb-4
            outline-none
            focus:ring-2
            focus:ring-indigo-500
          "
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>DSA</option>
          <option>Development</option>
          <option>CS Subjects</option>
          <option>Aptitude</option>
        </select>

        {/* Difficulty */}

        <label className="block text-sm font-medium mb-2">
          Difficulty
        </label>

        <select
          className="
            border
            border-gray-200
            dark:border-slate-700
            bg-white
            dark:bg-slate-800
            text-gray-900
            dark:text-white
            w-full
            p-3
            rounded-xl
            mb-4
            outline-none
            focus:ring-2
            focus:ring-indigo-500
          "
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>

        {/* XP */}

        <label className="block text-sm font-medium mb-2">
          XP Reward
        </label>

        <input
          type="number"
          className="
            border
            border-gray-200
            dark:border-slate-700
            bg-white
            dark:bg-slate-800
            text-gray-900
            dark:text-white
            w-full
            p-3
            rounded-xl
            mb-6
            outline-none
            focus:ring-2
            focus:ring-indigo-500
          "
          value={xp}
          onChange={(e) => setXp(Number(e.target.value))}
        />

        {/* Buttons */}

        <div className="flex justify-end gap-3">

          <button
            onClick={onClose}
            className="
              px-5
              py-2
              rounded-xl
              bg-gray-200
              dark:bg-slate-700
              text-gray-800
              dark:text-gray-200
              hover:bg-gray-300
              dark:hover:bg-slate-600
              transition
            "
          >
            Cancel
          </button>

          <button
            onClick={addTask}
            className="
              px-5
              py-2
              rounded-xl
              bg-indigo-600
              hover:bg-indigo-700
              text-white
              transition
            "
          >
            Add Task
          </button>

        </div>

      </div>

    </div>
  );
}

export default AddTaskModal;