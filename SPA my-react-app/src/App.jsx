import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <h1>Counter</h1>

      <div className="counter" role="group" aria-label="Counter controls">
        <button
          aria-label="decrement"
          className="btn"
          onClick={() => setCount(c => Math.max(0, c - 1))}
          disabled={count <= 0}
        >
          −
        </button>

        <div className="value" aria-live="polite">{count}</div>

        <button
          aria-label="increment"
          className="btn"
          onClick={() => setCount(c => c + 1)}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default App