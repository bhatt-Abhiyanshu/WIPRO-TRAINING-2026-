import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AnimatedRoutes from './components/AnimatedRoutes'
import {Link} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      
       <nav>
        <Link to="/">Home</Link> { " | "}
        <Link to="/employees">Employees</Link>
       </nav>
       <AnimatedRoutes/>
      
      
    </>
  )
}
export default App