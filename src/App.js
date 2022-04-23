import logo from './logo.svg';
import './App.scss';
import React, { useState } from 'react';
import dingSound from './assets/audio/ding.mp3';
import finishSound from './assets/audio/finished-001.mp3';

function App() {
  document.title="Relaxation Timer";

  const [reps, setReps] = useState(1);
  const [time, setTime] = useState(5);

  const decrementReps = () => {
    if (reps > 1) {
      const newReps = reps - 1;
      setTime(newReps * 5);
      setReps(newReps);
    }
  }

  const incrementReps = () => {
    const newReps = reps + 1;
    setTime(newReps * 5);
    setReps(newReps);
  }

  const startTimer = () => {
    const next = new Audio(dingSound);
    const finish = new Audio(finishSound);
    next.play();

    const total = reps * 6;
    let current = 1;
    const rounds = setInterval(() => {
      ++current;
      if (current <= total) {
        next.play()
      } else {
        finish.play();
        clearInterval(rounds);
      }
    }, 50000)
  }

  return (
    <div className="app">
      <div className="app__container">
        <h1 className="app__time">{`${time}:00`}</h1>
        <div className="app__repetitions">
          <button 
            className="app__decrement"
            onClick={decrementReps}>
            -
          </button>
          <span className="app__rep-count">{reps}</span>
          <button 
            className="app__increment"
            onClick={incrementReps}>
            +
          </button>
        </div>
        <div className="app__go-box">
          <button 
            className="app__go"
            onClick={startTimer}>
            Go
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
