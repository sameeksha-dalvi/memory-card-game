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

const Card = ({ imgName, label }) => {
  return (
    <>
      <div className="card">
        <div className="card-img-section"><img className="card-image" src={imgName} /></div>
        <div className="card-name-section">{label}</div>
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
          <Button label="Reset Game" className="reset-btn" />
        </div>
        <div className="card-section">
          <Card label="Calcifer" imgName={calciferImg} />
          <Card label="Chihiro" imgName={chihiroImg} />
          <Card label="Haku" imgName={hakuImg} />
          <Card label="Jiji" imgName={jijiImg} />
          <Card label="Kiki" imgName={kikiImg} />
          <Card label="Mei" imgName={meiImg} />
          <Card label="Muska" imgName={muskaImg} />
          <Card label="No Face" imgName={nofaceImg} />
          <Card label="Satsuki" imgName={satsukiImg} />
          <Card label="Sheeta" imgName={sheetaImg} />
          <Card label="Sophie" imgName={sophieImg} />
          <Card label="Totoro" imgName={totoroImg} />

        </div>
      </div>

    </>
  )
}

export default App
