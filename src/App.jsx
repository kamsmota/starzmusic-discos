import { useState } from 'react'
import vitrola from './assets/vitrola.png'
import disco from './assets/disco.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="" target="_blank" className='tocandodisco'>
          <img src={vitrola} className='vitrola' alt='Vitrola' />
          <img src={disco} className="disco" alt="Disco na Vitrola" />
        </a>
      </div>
      <h1>STARZMUSIC discos</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
