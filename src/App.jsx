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

const Score = ({ className, label, value, isAnimating }) => {

  return (
    <>
      <div className={`${className} ${isAnimating ? "score-pop" : ""}`}>
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

const Card = ({ id, imgName, label, onClick, isShuffling }) => {
  return (
    <>
      <div className={`card ${isShuffling ? "shuffle" : ""}`} onClick={() => onClick(id)}>
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
  const [isShuffling, setIsShuffling] = useState(false);
  const [scoreAnimation, setScoreAnimation] = useState(false);
  const [bestScoreAnimation, setBestScoreAnimation] = useState(false);


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

  const handleCardClick = (id) => {

    setScoreAnimation(true);

    setTimeout(() => {
      setScoreAnimation(false);
    }, 300);

    if (clickedCards.includes(id)) {

      setScore(0);
      setClickedCards([]);

    } else {


      const newScore = score + 1;

      setClickedCards([...clickedCards, id]);

      setScore(newScore);

      if (newScore > bestScore) {
        setBestScore(newScore);
        setBestScoreAnimation(true);

        setTimeout(() => {
          setBestScoreAnimation(false);
        }, 300);
      }

      shuffleCards();



    }
  }

  const handleResetBtn = () => {
    setScore(0);
    setBestScore(0);
    setClickedCards([]);
    shuffleCards();
  }

  const shuffleCards = () => {

    setIsShuffling(true);

    setTimeout(() => {

      setCharacters(
        [...characters].sort(() => Math.random() - 0.5)
      );

      setIsShuffling(false);

    }, 400);

  }

  return (

    <>
      <div className="main-container">
        <Header label="Memory Card Game" />
        <div className="score-section">
          <Score className="current-score" label="Score" value={score} isAnimating={scoreAnimation} />
          <Score className="best-score" label="Best Score" value={bestScore} isAnimating={bestScoreAnimation} />
          <Button label="Reset Game" className="reset-btn" onClick={handleResetBtn} />
        </div>
        <div className="card-section">
          {characters.map((character) => (
            <Card
              key={character.id}
              id={character.id}
              label={character.name}
              imgName={imageMap[character.name]}
              onClick={handleCardClick}
              isShuffling={isShuffling}
            />
          ))}
        </div>
      </div>

    </>
  )
}

export default App
