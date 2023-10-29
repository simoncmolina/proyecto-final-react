import { useState } from "react";
import { Box, Button, FormControl, Input} from '@chakra-ui/react'

function TaskForm({addTask}){
    const [userInput, setUserInput] = useState('')
    const handleOnChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(userInput.trim() !== ''){
          addTask(userInput);
          setUserInput('')  
        }
    }
    return (
        <Box m={[2, 3]}>
            <form onSubmit={handleSubmit}>
                <Input type="text" value={userInput} onChange={handleOnChange}/>
                <Button type="submit" borderTopRadius="md" colorScheme="teal" _hover={{background:"white",color:"teal.500",}}>Add Task</Button>
            </form>

        </Box>
    )
}

export default TaskForm;