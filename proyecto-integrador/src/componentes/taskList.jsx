import TodoItem from "./TodoItem";
function TaskList({ ToDos, onComplete, onDeleteItem }) {
    return (
        <div>
            {
                ToDos.map((ToDo, index) => (
                    <TodoItem key = {`todo-${index}`}todo = {ToDo} onComplete = {onComplete} onDeleteItem={onDeleteItem}/>  
                ))
            }
        </div>
    );
    
}
export default TaskList;