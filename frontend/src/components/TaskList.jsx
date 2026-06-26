import TaskItem from './TaskItem'

function TaskList({
  tasks,
  toggleTask,
  deleteTask
}) {

  if (tasks.length === 0) {

    return (
      <div className="text-center text-gray-400 mt-8">
        No tasks added yet
      </div>
    )
  }

  return (

    <div className="space-y-4">

      {tasks.map((task) => (

        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />

      ))}

    </div>
  )
}

export default TaskList