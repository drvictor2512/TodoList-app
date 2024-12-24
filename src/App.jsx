import React ,{useState, useEffect} from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'
import Todo from './assets/goal.jpg'
import Doing from './assets/start.jpg'
import Done from './assets/done.jpg'

const oldTask = localStorage.getItem("tasks");
const App = () => {
  const [tasks, setTask] = useState(JSON.parse(oldTask) || []);
  useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const handleDelete = (taskIndex) => {
      const newTasks = tasks.filter((task, index) => index !== taskIndex);
      setTask(newTasks);
  }
  return (
    <div className='app'>
        <TaskForm setTask={setTask}/>
        <main className='app_main'>
            <TaskColumn title='To Do' icon={Todo} tasks={tasks} status='todo' handleDelete={handleDelete}/>
            <TaskColumn title='Doing' icon={Doing} tasks={tasks} status='doing' handleDelete={handleDelete}/>
            <TaskColumn title='Done' icon={Done} tasks={tasks} status='done' handleDelete={handleDelete}/>
            
        </main>
    </div>
  )
}

export default App