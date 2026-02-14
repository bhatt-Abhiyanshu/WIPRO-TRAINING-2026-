import { useState } from "react"
import Button from "./Button"

export default function TodoItem({ todo, onUpdate, onDelete }) {
  const [edit, setEdit] = useState(false)
  const [text, setText] = useState(todo.title)

  const save = async () => {
    try {
      const res = await fetch(`http://localhost:5000/todos/${todo._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: text })
      })
      const data = await res.json()
      onUpdate(data)
      setEdit(false)
    } catch {
      alert("Update failed")
    }
  }

  const remove = async () => {
    try {
      await fetch(`http://localhost:5000/todos/${todo._id}`, {
        method: "DELETE"
      })
      onDelete(todo._id)
    } catch {
      alert("Delete failed")
    }
  }

  return (
    <div className="flex justify-between items-center bg-purple-100 p-2 rounded mb-2">
      {edit ? (
        <>
          <input
            value={text}
            onChange={e => setText(e.target.value)}
            className="border p-1 rounded flex-1 mr-2"
          />
          <Button
            onClick={save}
            className="bg-green-500 text-white"
          >
            ✔
          </Button>
        </>
      ) : (
        <>
          <span>{todo.title}</span>
          <div className="flex gap-2">
            <Button
              onClick={() => setEdit(true)}
              className="bg-blue-500 text-white"
            >
              ✏️
            </Button>
            <Button
              onClick={remove}
              className="bg-red-500 text-white"
            >
              ❌
            </Button>
          </div>
        </>
      )}
    </div>
  )
}
