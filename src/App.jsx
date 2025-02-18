import { useState } from 'react'
import githubLogo from './assets/github-logo.webp'
import './App.css'
import './temp.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Rock Paper Scissor Dash</h1>
      <div>
        <a href='https://github.com/paulcostanza/CSCI401--Rock-Paper-Scissors-Dash' target='_blank'>
          <button>
            <img id="github-logo" src={githubLogo} alt="github-logo" />
          </button>
        </a>

        <p>
          Future site of our game, stay tuned!
        </p>
      </div>
      <p className="read-the-docs">

      </p>
    </>
  )
}

export default App
