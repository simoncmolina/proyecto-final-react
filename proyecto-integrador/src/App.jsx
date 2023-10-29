import { useState } from 'react';
import TaskForm from './componentes/taskForm';
import TaskList from './componentes/taskList'; 
import './App.css';
import { Box, Heading} from '@chakra-ui/react'



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
    <Box maxW="960px" mx="auto" w='100%' h='100%' bgGradient="radial(gray.300, yellow.400, pink.200)" textAlign={['right','center']} boxSize="sm">
      <Heading color='black' maxW='50%' fontSize='2em' textAlign={['right','center']}>TASK LIST</Heading>
      <TaskForm addTask={addTask}/>
      <TaskList ToDos = {tasks} onComplete = {onComplete} onDeleteItem={onDeleteItem}/>
    </Box>
  );
}

export default App;