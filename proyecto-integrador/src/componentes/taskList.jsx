import TodoItem from "./TodoItem";
import { Box } from '@chakra-ui/react'
function TaskList({ ToDos, onComplete, onDeleteItem }) {
    return (
        <Box maxW="960px" mx="auto" backgroundColor='white'>
            {
                ToDos.map((ToDo, index) => (
                    <TodoItem key = {`todo-${index}`}todo = {ToDo} onComplete = {onComplete} onDeleteItem={onDeleteItem}/>  
                ))
            }
        </Box>
    );
    
}
export default TaskList;