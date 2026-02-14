import { useEffect, useState } from "react"
import CourseForm from "./components/CourseForm"
import CourseList from "./components/CourseList"

export default function App() {
  const [courses, setCourses] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
    loadCourses()
  }, [])

  async function loadCourses() {
    try {
      const res = await fetch("http://localhost:3000/courses")
      const data = await res.json()
      setCourses(data)
    } catch {
      setError("Failed to load courses")
    }
  }

  async function addCourse(title) {
    const res = await fetch("http://localhost:3000/courses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title })
    })
    const data = await res.json()
    setCourses([...courses, data])
  }

  async function deleteCourse(id) {
    await fetch(`http://localhost:3000/courses/${id}`, {
      method: "DELETE"
    })
    setCourses(courses.filter(c => c._id !== id))
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white p-6 rounded-xl shadow-xl w-96">
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-4">
          course manager
        </h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <CourseForm onAdd={addCourse} />
        <CourseList courses={courses} onDelete={deleteCourse} />
      </div>
    </div>
  )
}
