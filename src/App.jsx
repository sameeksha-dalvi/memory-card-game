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

import clickSoundFile from "./assets/sounds/click.mp3";
import shuffleSoundFile from "./assets/sounds/shuffle.mp3";
import successSoundFile from "./assets/sounds/best-score.mp3";
import gameOverSoundFile from "./assets/sounds/game-over.mp3";

import Header from "./components/Header";
import Score from "./components/Score";
import Button from "./components/Button";
import Card from "./components/Card";

const clickSound = new Audio(clickSoundFile);
const shuffleSound = new Audio(shuffleSoundFile);
const successSound = new Audio(successSoundFile);
const gameOverSound = new Audio(gameOverSoundFile);

const playSound = (sound) => {
  sound.currentTime = 0;
  sound.play();
};


const ResetIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 12a9 9 0 1 0 3-6.7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M3 4v6h6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

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
      playSound(gameOverSound);
      setScore(0);
      setClickedCards([]);

    } else {


      const newScore = score + 1;

      setClickedCards([...clickedCards, id]);

      setScore(newScore);

      if (newScore === characters.length) {
        playSound(successSound);
        setBestScore(newScore);

        setScore(0);
        setClickedCards([]);

        shuffleCards();
        return;
      }

      if (newScore > bestScore) {
        playSound(successSound);
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
    playSound(clickSound);
    setScore(0);
    setBestScore(0);
    setClickedCards([]);
  }

  const shuffleCards = () => {

    setIsShuffling(true);
    playSound(shuffleSound);
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
        <div className='game-header-section'>
          <Header label="Ghibli Memory Game" />
          <div className="score-section">
            <Score className="current-score" label="Score" value={score} isAnimating={scoreAnimation} />
            <Score className="best-score" label="Best Score" value={bestScore} isAnimating={bestScoreAnimation} />
            <Button label="Reset Game" className="reset-btn" onClick={handleResetBtn} icon={<ResetIcon />}
            />
          </div>
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
