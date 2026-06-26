import { useEffect, useState } from 'react'
import axios from 'axios'

import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import ProgressBar from './components/ProgressBar'

const API = 'http://127.0.0.1:8000/tasks'

function App() {

  const [tasks, setTasks] = useState([])

  // FETCH TASKS
  const fetchTasks = async () => {

    try {

      const response = await axios.get(API)

      setTasks(response.data)

    } catch (error) {

      console.log(error)

    }
  }

  // LOAD TASKS
  useEffect(() => {

    fetchTasks()

  }, [])

  // ADD TASK
  const addTask = async (title) => {

    try {

      await axios.post(API, {
        title,
      })

      fetchTasks()

    } catch (error) {

      console.log(error)

    }
  }

  // TOGGLE TASK
  const toggleTask = async (id) => {

    try {

      await axios.put(`${API}/${id}`)

      fetchTasks()

    } catch (error) {

      console.log(error)

    }
  }

  // DELETE TASK
  const deleteTask = async (id) => {

    try {

      await axios.delete(`${API}/${id}`)

      fetchTasks()

    } catch (error) {

      console.log(error)

    }
  }

  return (

    <div className="min-h-screen flex justify-center items-center p-6 bg-slate-950">

      <div className="w-full max-w-2xl bg-slate-900 p-8 rounded-2xl shadow-2xl">

        <h1 className="text-5xl font-bold text-center mb-10">
          TaskFlow Pro
        </h1>

        <ProgressBar tasks={tasks} />

        <TaskForm addTask={addTask} />

        <TaskList
          tasks={tasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />

      </div>

    </div>
  )
}

export default App