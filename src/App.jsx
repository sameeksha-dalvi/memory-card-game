import { useState } from 'react'
import './App.css'
import calciferImg from './assets/images/Calcifer.png';
import chihiroImg from './assets/images/Chihiro.png';
import hakuImg from './assets/images/Haku.png';
import jijiImg from './assets/images/Jiji.png';
import kikiImg from './assets/images/Kiki.png';
import meiImg from './assets/images/Mei_Kusakabe.png';
import muskaImg from './assets/images/Muska.png';
import nofaceImg from './assets/images/No-Face.png';
import satsukiImg from './assets/images/Satsuki_Kusakabe.png';
import sheetaImg from './assets/images/Sheeta.png';
import sophieImg from './assets/images/Sophie_Elder.png';
import totoroImg from './assets/images/Totoro.png';

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

const Button = ({ className, label, onClick }) => {
  return (
    <>
      <button className={className} onClick={onClick}>{label}</button>
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
          <Button label="Reset Game" className="reset-btn" />
        </div>
        <div className="card-section">
          <div className="card">
            <div className="card-img-section"><img className="card-image" src={calciferImg} /></div>
            <div className="card-name-section">Calcifer</div>
          </div>
          <div className="card">
            <div className="card-img-section"><img className="card-image" src={chihiroImg} /></div>
            <div className="card-name-section">Chihiro</div>
          </div>
          <div className="card">
            <div className="card-img-section"><img className="card-image" src={hakuImg} /></div>
            <div className="card-name-section">Haku</div>
          </div>
          <div className="card">
            <div className="card-img-section"><img className="card-image" src={jijiImg} /></div>
            <div className="card-name-section">Jiji</div>
          </div>
          <div className="card">
            <div className="card-img-section"><img className="card-image" src={kikiImg} /></div>
            <div className="card-name-section">Kiki</div>
          </div>
          <div className="card">
            <div className="card-img-section"><img className="card-image" src={meiImg} /></div>
            <div className="card-name-section">Mei</div>
          </div>
          <div className="card">
            <div className="card-img-section"><img className="card-image" src={muskaImg} /></div>
            <div className="card-name-section">Muska</div>
          </div>
          <div className="card">
            <div className="card-img-section"><img className="card-image" src={nofaceImg} /></div>
            <div className="card-name-section">No Face</div>
          </div>
          <div className="card">
            <div className="card-img-section"><img className="card-image" src={satsukiImg} /></div>
            <div className="card-name-section">Satsuki</div>
          </div>
          <div className="card">
            <div className="card-img-section"><img className="card-image" src={sheetaImg} /></div>
            <div className="card-name-section">Sheeta</div>
          </div>
          <div className="card">
            <div className="card-img-section"><img className="card-image" src={sophieImg} /></div>
            <div className="card-name-section">Sophie</div>
          </div>
          <div className="card">
            <div className="card-img-section"><img className="card-image" src={totoroImg} /></div>
            <div className="card-name-section">Totoro</div>
          </div>

        </div>
      </div>

    </>
  )
}

export default App
