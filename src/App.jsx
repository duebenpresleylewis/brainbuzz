import { useState } from 'react'
import Welcome from './components/WelcomePage'
import Header from './components/Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Welcome />
    </div>
  )
}

export default App
