import React, { Component } from 'react';

import Wheel from './Wheel';

import hihatMp3 from '../public/sounds/hat.mp3';
import kickMp3 from '../public/sounds/kick.mp3';
import snareMp3 from '../public/sounds/snare.mp3';

class Player extends Component {
  constructor() {
    super();

    this.drums = {
      hihat: React.createRef(),
      kick: React.createRef(),
      snare: React.createRef()
    };
  }

  handleClick = () => {
    this.drums.hihat.current.playOrPause();
    this.drums.kick.current.playOrPause();
    this.drums.snare.current.playOrPause();
  }

  render() {
    return <div>
      <Wheel ref={this.drums.kick}
             initialState={{active: [0, 8]}}
             bpm={120} sound={{
              volume: 100,
              url: kickMp3
             }}/>
      <Wheel ref={this.drums.snare}
             initialState={{active: [4, 12]}}
             bpm={120} sound={{
              volume: 100,
              url: snareMp3
             }}/>
      <Wheel ref={this.drums.hihat}
             initialState={{active: [0, 2, 4, 6, 8, 10, 12, 14, 16]}}
             bpm={120} sound={{
              volume: 100,
              url: hihatMp3
             }}/>
      <button onClick={this.handleClick}>Play</button></div>;
  }
}

export default Player;
