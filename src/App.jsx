import { useState, useEffect } from 'react'
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

const Card = ({ id, imgName, label, onClick }) => {
  return (
    <>
      <div className="card" onClick={() => onClick(id)}>
        <div className="card-img-section"><img className="card-image" src={imgName} alt={label} /></div>
        <div className="card-name-section">{label}</div>
      </div>
    </>
  )
}

const imageMap = {
  "Chihiro Ogino": chihiroImg,
  "Haku": hakuImg,
  "Jiji": jijiImg,
  "Kiki": kikiImg,
  "Mei Kusakabe": meiImg,
  "Colonel Muska": muskaImg,
  "Satsuki Kusakabe": satsukiImg,
  "Totoro": totoroImg,
  "Pazu": pazuImg,
  "San": sanImg,
  "Ursula": ursulaImg,
  "Yuki": yukiImg,
};



function App() {

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [characters, setCharacters] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);

  const handleCardClick = (id) => {
    if (clickedCards.includes(id)) {

      setScore(0);
      setClickedCards([]);

    } else {

      setClickedCards([...clickedCards, id]);

      setScore((prevScore) => prevScore + 1);

    }
  }


  useEffect(() => {
    fetch("https://ghibliapi.vercel.app/people")
      .then((response) => response.json())
      .then((data) => {

        const filteredCharacters = data.filter(
          (character) => imageMap[character.name]
        );

        setCharacters(filteredCharacters);
      })
      .catch((error) => console.log(error));

  }, []);

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
          {characters.map((character) => (
            <Card
              key={character.id}
              id={character.id}
              label={character.name}
              imgName={imageMap[character.name]}
              onClick={handleCardClick}
            />
          ))}
        </div>
      </div>

    </>
  )
}

export default App
