import { useState } from "react"
import Button from "./Button"

export default function TodoForm({ onAdd }) {
  const [title, setTitle] = useState("")

  const submit = async () => {
    try {
      if (!title) return
      const res = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title })
      })
      const data = await res.json()
      onAdd(data)
      setTitle("")
    } catch (err) {
      alert("Failed to add todo")
    }
  }

  return (
    <div className="flex gap-2 mb-4">
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="border p-2 flex-1 rounded"
        placeholder="New task"
      />
      <Button
        onClick={submit}
        className="bg-purple-500 text-white"
      >
        Add
      </Button>
    </div>
  )
}
