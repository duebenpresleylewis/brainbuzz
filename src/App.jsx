import { useState } from 'react'
import Header from './components/Header';
import SectionPlaceholder from './components/SectionPlaceholder'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <SectionPlaceholder />

    </div>
  )
}

export default App
