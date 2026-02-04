import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import MyButton from './Button'
import Footer from './Footer'
import Card from './Card'
import Joke from './Joke'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
         <Joke/>
        <h3>Hi , This is Abhyanshu Bhatt.</h3>
        <p> Choose any of the given games to play.</p>
        <div className='flex flex-wrap '>
        <Card cardTitle="CHESS" cardDescription="Full Mind Exercise"></Card>
        <Card cardTitle="TIC TAC TOE" cardDescription="Timepass Buddy"></Card>
        <Card cardTitle="SNAKE" cardDescription="Yeah the 90's vintage...!"></Card>
        <Card cardTitle="ROAD RASH" cardDescription="Kick some"></Card>
         <Card cardTitle="ASPHALT RACING" cardDescription="Car race"></Card>
        <Card cardTitle="SUDOKU" cardDescription="Mind puzzle"></Card>
        <Card cardTitle="BOXING" cardDescription="Kill your stress."></Card>
        <Card cardTitle="FIFA25" cardDescription="OG Football gameplay"></Card>
        <Card cardTitle="CRICKET" cardDescription="Score some Tons."></Card>
        </div>
       
        <Footer />
        
      </div>
      
    </>
  )
}

export default App
