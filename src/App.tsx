import React from 'react';
import './App.css';
import utBadge from './ut-badge.png';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


function App() {
  const [wins, setWins] = useState<number>(() => {
    const saved = localStorage.getItem('fut-wins');
    return saved ? parseInt(saved) : 0;
  });

  const [losses, setLosses] = useState<number>(() => {
    const saved = localStorage.getItem('fut-losses');
    return saved ? parseInt(saved) : 0;
  });

  // Save to localStorage when wins/losses change
  useEffect(() => {
    localStorage.setItem('fut-wins', wins.toString());
    localStorage.setItem('fut-losses', losses.toString());
  }, [wins, losses]);

  return (
    <div className="app">
        
        
        <div className="scoreboard-ui">

            <div className="fut-badge-overlay">
            {/* <img src="/ut-badge.png" alt="FUT Badge" /> */}
             <img src={utBadge} alt="UT Badge" />
          </div>
   <motion.div
  className="trapezoid"
  animate={{ boxShadow: [
    '0 0 20px rgba(255, 0, 0, 0.6)',
    '0 0 30px rgba(255, 50, 50, 0.9)',
    '0 0 40px rgba(255, 0, 0, 0.6)',
    '0 0 30px rgba(255, 50, 50, 0.9)',
    '0 0 20px rgba(255, 0, 0, 0.6)'
  ]}}
  transition={{
    duration: 2,
    repeat: Infinity,
    repeatType: 'loop',
    ease: 'linear'
  }}
>
              <div className="fut-left-glow"></div>
          <div className="wins-section">
            {/* <button className="btn" onClick={() => setWins(wins + 1)}>+</button> */}
            <span className="value" onClick={() => setWins(Math.max(0, wins - 1))}>{wins}</span>
            <span className="label" onClick={() => setWins(wins + 1)}>WINS</span>
            
            {/* <button className="btn" onClick={() => setWins(Math.max(0, wins - 1))}>-</button> */}
          </div>

          

          <div className="losses-section">
            {/* <button className="btn" onClick={() => setLosses(losses + 1)}>+</button> */}
            <span className="label" onClick={() => setLosses(losses + 1)}>LOSS</span>
            <span className="value" onClick={() => setLosses(Math.max(0, losses - 1))}>{losses}</span>
            {/* <button className="btn" onClick={() => setLosses(Math.max(0, losses - 1))}>-</button> */}
          </div>
            <div className="fut-right-glow"></div>
            {/* <div className="fut-badge-overlay"> */}
            {/* <img src="/ut-badge.png" alt="FUT Badge" /> */}
             {/* <img src={utBadge} alt="UT Badge" /> */}
          {/* </div> */}

        </motion.div>
      </div>
    </div>
  );
}

export default App;
