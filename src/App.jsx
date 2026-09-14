import { useState } from 'react'
import SectionPlaceholder from './components/SectionPlaceholder'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <SectionPlaceholder />

      {/* Main Content */}
      {/* conditional rendering using state */}

    </div>
  )
}

export default App
