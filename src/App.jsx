import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Header/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
    </div>
  )
}

export default App
