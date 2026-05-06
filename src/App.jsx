//import { useState } from 'react'
import './App.css'

const Header = ({label}) =>{
  return(
    <>
    <h1 className='game-header'>{label}</h1>
    </>
  )
}

function App() {


  return (

    <>
      <div className="main-container">
        <Header label="Memory Card Game"/>
        <div className="score-section">
          <div className="current-score">Score</div>
          <div className="best-scrore">Best Score</div>
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
