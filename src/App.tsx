import React from 'react';
import './App.css';
import utBadge from './assets/ut-badge.png';
import { useState,useRef, useEffect } from 'react';
import { motion } from 'framer-motion';


function App() {
   const divRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  useEffect(() => {
    if (!divRef.current) return;

    const { width, height, top, left } = divRef.current.getBoundingClientRect();

    setDimensions({ width, height, top, left });
  }, []);
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
        
        
        <div ref={divRef} className="scoreboard-ui">

            <div className="fut-badge-overlay">
            {/* <img src="/ut-badge.png" alt="FUT Badge" /> */}
             {/* <img src={utBadge} alt="UT Badge" /> */}
          </div>
   <div className="trapezoid">
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
         

        </div>
      </div>
    </div>
  );
}

export default App;
