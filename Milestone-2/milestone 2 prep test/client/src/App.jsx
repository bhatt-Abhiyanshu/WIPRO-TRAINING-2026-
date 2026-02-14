import { useEffect, useState } from "react"
import TodoForm from "./components/TodoForm"
import TodoItem from "./components/TodoItem"

export default function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/todos")
      .then(res => res.json())
      .then(setTodos)
  }, [])

  const addTodo = (todo) => setTodos([...todos, todo])

  const updateTodo = (updated) =>
    setTodos(todos.map(t => (t._id === updated._id ? updated : t)))

  const deleteTodo = (id) =>
    setTodos(todos.filter(t => t._id !== id))

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="bg-white p-6 rounded-xl w-96 shadow-xl">
        <h1 className="text-2xl font-bold text-center text-purple-600 mb-4">
          ToDo Manager
        </h1>

        <TodoForm onAdd={addTodo} />

        {todos.map(todo => (
          <TodoItem
            key={todo._id}
            todo={todo}
            onUpdate={updateTodo}
            onDelete={deleteTodo}
          />
        ))}
      </div>
    </div>
  )
}
