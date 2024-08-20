import { useEffect, useState } from 'react'
import "./style.css"
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function App() {
  const [todos, setTodOs] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodOs((prevTodos) => {
      return [...prevTodos, { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodOs(prevTodos => {
      return prevTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  }
  function deleteTodo(id) {
    setTodOs((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== id)

    })
  }
  return (
    <>
      <TodoForm onSubmit={addTodo} />
      <h1 className='header'>Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  )
}

export default App
