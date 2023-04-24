import React, { useState } from 'react';
import './App.css';

function App() {
  const [isDay, setIsDay] = useState(true);

  const handleToggle = () => {
    setIsDay(!isDay);
  }

  return (
    <div className={`container ${isDay ? 'day' : 'night'}`}>
      <div className="toggle">
        <input type="checkbox" id="toggle" checked={isDay} onChange={handleToggle} />
        <label htmlFor="toggle"></label>
      </div>
      <h1 className="name">Karan Vanzwala</h1>
      <p className="description">I am a frontend developer with experience in HTML, CSS, JavaScript, and React.js. I enjoy building user interfaces that are both beautiful and functional. In my free time, I like to experiment with new technologies and learn new skills.</p>
      <div className="animation">
        <div className="box"></div>
        {/* <span role="img" aria-label="rocket" className="emoji">🚀</span> */}
      </div>
    </div>
  );
}

export default App;
