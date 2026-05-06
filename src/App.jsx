import { useState } from 'react'
import './App.css'

const Header = ({ label }) => {
  return (
    <>
      <h1 className='game-header'>{label}</h1>
    </>
  )
}

const Score = ({ className, label, value }) => {

  return (
    <>
      <div className={className}>
        <p>{label}:</p>
        <p>{value}</p>
      </div>
    </>
  )
}

function App() {

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0)

  return (

    <>
      <div className="main-container">
        <Header label="Memory Card Game" />
        <div className="score-section">
          <Score className="current-score" label="Score" value={score} />
          <Score className="best-score" label="Best Score" value={bestScore} />
          <button>Reset Game</button>
        </div>
        <div className="card-section">
          <div className="card">
            A
          </div>
          <div className="card">
            A
          </div>
          <div className="card">
            A
          </div>
          <div className="card">
            A
          </div>
          <div className="card">
            A
          </div>
          <div className="card">
            A
          </div>
          <div className="card">
            A
          </div>
          <div className="card">
            A
          </div>
          <div className="card">
            A
          </div>
          <div className="card">
            A
          </div>
          <div className="card">
            A
          </div>
          <div className="card">
            A
          </div>

        </div>
      </div>

    </>
  )
}

export default App
