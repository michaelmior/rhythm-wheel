import React from 'react';

import GithubCorner from 'react-github-corner';

import Player from './Player';

import './App.css';

function App() {
  return (
    <div className="App">
      <GithubCorner href="https://github.com/michaelmior/rhythm-wheel" />
      <Player/>
      <footer>Inspired by <a href="https://www.amazon.com/Geometry-Musical-Rhythm-Makes-Second/dp/0815370970/">The Geometry of Musical Rhythm: What Makes a "Good" Rhythm Good?</a></footer>
    </div>
  );
}

export default App;
