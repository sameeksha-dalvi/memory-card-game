import { useState } from 'react'
import './App.css'
import pazuImg from './assets/images/Pazu.png';
import chihiroImg from './assets/images/Chihiro.png';
import hakuImg from './assets/images/Haku.png';
import jijiImg from './assets/images/Jiji.png';
import kikiImg from './assets/images/Kiki.png';
import meiImg from './assets/images/Mei_Kusakabe.png';
import muskaImg from './assets/images/Muska.png';
import sanImg from './assets/images/San.png';
import satsukiImg from './assets/images/Satsuki_Kusakabe.png';
import ursulaImg from './assets/images/Ursula.png';
import yukiImg from './assets/images/Yuki.png';
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
          <Card label="Chihiro Ogino" imgName={chihiroImg} />
          <Card label="Haku" imgName={hakuImg} />
          <Card label="Jiji" imgName={jijiImg} />
          <Card label="Kiki" imgName={kikiImg} />
          <Card label="Mei Kusakabe" imgName={meiImg} />
          <Card label="Colonel Muska" imgName={muskaImg} />
          <Card label="Satsuki Kusakabe" imgName={satsukiImg} />
          <Card label="Totoro" imgName={totoroImg} />
          <Card label="Pazu" imgName={pazuImg} />
          <Card label="San" imgName={sanImg} />
          <Card label="Ursula" imgName={ursulaImg} />
          <Card label="Yuki" imgName={yukiImg} />
        </div>
      </div>

    </>
  )
}

export default App
