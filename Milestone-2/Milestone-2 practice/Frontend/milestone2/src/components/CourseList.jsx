import Button from "./Button"

export default function CourseList({ courses, onDelete }) {
  return (
    <ul className="space-y-2">
      {courses.map(c => (
        <li
          key={c._id}
          className="flex justify-between items-center bg-gray-100 px-3 py-2 rounded-md"
        >
          <span className="font-medium">{c.title}</span>
          <Button text="Delete" onClick={() => onDelete(c._id)} />
        </li>
      ))}
    </ul>
  )
}
