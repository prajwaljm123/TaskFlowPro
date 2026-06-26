import { useState } from 'react'

function TaskForm({ addTask }) {
  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!title.trim()) return

    addTask(title)
    setTitle('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 mb-6"
    >
      <input
        type="text"
        placeholder="Enter task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 p-3 rounded-lg bg-slate-800 border border-slate-700 outline-none"
      />

      <button
        type="submit"
        className="bg-blue-600 px-5 py-3 rounded-lg hover:bg-blue-700"
      >
        Add Task
      </button>
    </form>
  )
}

export default TaskForm