export default function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-indigo-500 text-white px-3 py-1 rounded-md hover:bg-indigo-600 transition"
    >
      {text}
    </button>
  )
}
