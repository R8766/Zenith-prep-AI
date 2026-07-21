import { useState, useEffect } from "react";

function EditTaskModal({
  isOpen,
  onClose,
  task,
  onSave,
}) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("DSA");
  const [difficulty, setDifficulty] = useState("Easy");
  const [xp, setXp] = useState(20);

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setCategory(task.category);
      setDifficulty(task.difficulty);
      setXp(task.xp);
    }
  }, [task]);

  if (!isOpen) return null;

  const save = () => {
    onSave({
      ...task,
      title,
      category,
      difficulty,
      xp,
    });

    onClose();
  };

  return (
    <div className="
      fixed
      inset-0
      bg-black/40
      dark:bg-black/70
      flex
      justify-center
      items-center
      z-50
      p-4
    ">

      <div className="
        bg-white
        dark:bg-slate-900
        border
        border-gray-200
        dark:border-slate-700
        rounded-2xl
        p-8
        w-full
        max-w-[450px]
        shadow-2xl
        transition-colors
      ">

        {/* Header */}

        <h2 className="
          text-2xl
          font-bold
          mb-6
          text-gray-900
          dark:text-white
        ">
          Edit Task
        </h2>


        {/* Task Title */}

        <input
          type="text"
          placeholder="Task title"
          className="
            border
            border-gray-300
            dark:border-slate-700
            bg-white
            dark:bg-slate-800
            text-gray-900
            dark:text-white
            placeholder:text-gray-400
            dark:placeholder:text-gray-500
            w-full
            p-3
            rounded-xl
            mb-4
            outline-none
            focus:ring-2
            focus:ring-indigo-500
            transition-colors
          "
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />


        {/* Category */}

        <select
          className="
            border
            border-gray-300
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
            transition-colors
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

        <select
          className="
            border
            border-gray-300
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
            transition-colors
          "
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>


        {/* XP */}

        <input
          type="number"
          placeholder="XP"
          className="
            border
            border-gray-300
            dark:border-slate-700
            bg-white
            dark:bg-slate-800
            text-gray-900
            dark:text-white
            placeholder:text-gray-400
            dark:placeholder:text-gray-500
            w-full
            p-3
            rounded-xl
            mb-6
            outline-none
            focus:ring-2
            focus:ring-indigo-500
            transition-colors
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
              hover:bg-gray-300
              dark:bg-slate-700
              dark:hover:bg-slate-600
              text-gray-800
              dark:text-gray-200
              transition
            "
          >
            Cancel
          </button>


          <button
            onClick={save}
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
            Save
          </button>

        </div>

      </div>

    </div>
  );
}

export default EditTaskModal;