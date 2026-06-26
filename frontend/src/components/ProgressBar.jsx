function ProgressBar({ tasks }) {

  const completed = tasks.filter(
    (task) => task.completed
  ).length

  const percentage = tasks.length
    ? Math.round((completed / tasks.length) * 100)
    : 0

  return (
    <div className="mb-6">

      <div className="flex justify-between mb-2">
        <span>Progress</span>
        <span>{percentage}%</span>
      </div>

      <div className="w-full bg-slate-700 h-4 rounded-full overflow-hidden">

        <div
          className="bg-green-500 h-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        ></div>

      </div>

    </div>
  )
}

export default ProgressBar