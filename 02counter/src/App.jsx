import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)

  const addValue = () => {
    setCounter(prev => prev + 1)
  }

  const removeValue = () => {
    setCounter(prev => prev - 1)
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add</button>
      <br />
      <button onClick={removeValue}>Remove</button>

      <p>Footer: {counter}</p>
    </>
  )
}

export default App
