import React from 'react';

import GithubCorner from 'react-github-corner';

import Player from './Player';

function App() {
  return (
    <div className="App">
      <GithubCorner href="https://github.com/michaelmior/rhythm-wheel" />
      <Player/>
    </div>
  );
}

export default App;
