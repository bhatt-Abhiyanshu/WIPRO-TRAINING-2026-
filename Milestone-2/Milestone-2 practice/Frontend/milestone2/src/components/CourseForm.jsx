import { useState } from "react"
import Button from "./Button"

export default function CourseForm({ onAdd }) {
  const [title, setTitle] = useState("")

  function submit() {
    if (!title) return
    onAdd(title)
    setTitle("")
  }

  return (
    <div className="flex gap-2 mb-4">
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="border border-gray-300 rounded-md px-2 flex-1"
        placeholder="Enter course"
      />
      <Button text="Add" onClick={submit} />
    </div>
  )
}
