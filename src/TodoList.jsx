import TodoItem from './TodoItem'

function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <div>
            <ul className='list'>
                {todos.length === 0 && "No Todos"}
                {todos.map(todo => {
                    return (
                        <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
                    )
                })}
            </ul>
        </div>
    )
}

export default TodoList