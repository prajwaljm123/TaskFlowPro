function TaskItem({ task, toggleTask, deleteTask }) {

  const getPriorityColor = () => {

    const title = task.title.toLowerCase()

    if (title.includes('urgent')) {
      return 'border-red-500'
    }

    if (title.includes('meeting')) {
      return 'border-blue-500'
    }

    if (title.includes('study')) {
      return 'border-green-500'
    }

    return 'border-slate-700'
  }

  return (

    <div
      className={`
        bg-slate-800
        p-4
        rounded-xl
        flex
        justify-between
        items-center
        border-l-4
        ${getPriorityColor()}
        hover:scale-[1.01]
        transition-all
      `}
    >

      <div className="flex items-center gap-4">

        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          className="w-5 h-5"
        />

        <p
          className={`text-lg ${
            task.completed
              ? 'line-through text-gray-400'
              : ''
          }`}
        >
          {task.title}
        </p>

      </div>

      <button
        onClick={() => deleteTask(task.id)}
        className="
          bg-red-600
          px-4
          py-2
          rounded-lg
          hover:bg-red-700
          transition-all
        "
      >
        Delete
      </button>

    </div>
  )
}

export default TaskItem