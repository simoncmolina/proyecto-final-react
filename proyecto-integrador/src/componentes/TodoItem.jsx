import React from 'react'
import { Checkbox, CheckboxGroup, Box, Button, Input, ChakraProvider } from '@chakra-ui/react'


function TodoItem({todo, onComplete, onDeleteItem}) {
  
  
  return (
    <Box maxW="960px" mx="auto" color="black.50" bgGradient="radial(pink.300, yellow.400, gray.200)">
      <Checkbox spacing='4rem' colorScheme='green' margin="25px"></Checkbox>
      {todo.task}
      <Button onClick = {() => onDeleteItem(todo.id)} colorScheme="teal" _hover={{background:"white",color:"teal.500",}} margin="15px">DELETE</Button>
    </Box>
  )
}
export default TodoItem;
