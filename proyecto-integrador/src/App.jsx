import { useState } from 'react';
import TaskForm from './componentes/taskForm';
import TaskList from './componentes/taskList'; 
import './App.css';


function App() {
  const [tasks, setTasks] = useState([]) 
  
  const onComplete = (id) => {
    setTasks(tasks.map((task) => {
      return task.id === Number(id) ? {...task, completed: !task.completed} : {...task};
    }))
  } 
  const onDeleteItem = (id) => {
    setTasks([...tasks].filter(task => task.id !== id))
  }
  const addTask = (newTask) => {
    const newItem = {id : +new Date(), task: newTask, completed: false};
    setTasks([...tasks, newItem])
  }

  return (
    <div className='container'>
      <h1 className='title'>TASK LIST</h1>
      <TaskForm addTask={addTask}/>
      <TaskList ToDos = {tasks} onComplete = {onComplete} onDeleteItem={onDeleteItem}/>
    </div>
  );
}

export default App;