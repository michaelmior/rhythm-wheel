import React, { Component } from 'react';

import Wheel from './Wheel';

import './Player.css';

class Player extends Component {
  constructor() {
    super();

    this.state = {playing: false};
    this.drums = {
      hihat: React.createRef(),
      kick: React.createRef(),
      snare: React.createRef()
    };
  }

  handleClick = () => {
    this.setState((state) => {
      return {...state, playing: !state.playing};
    });

    this.drums.hihat.current.playOrPause();
    this.drums.kick.current.playOrPause();
    this.drums.snare.current.playOrPause();
  }

  render() {
    return <div className='Player' style={{margin: '50px auto 0 auto', width: '800px', textAlign: 'center'}}>
      <Wheel ref={this.drums.kick}
             initialState={{active: [0, 8]}}
             bpm={120} sound={{
               name: 'Kick',
               volume: 10,
               url: process.env.PUBLIC_URL + '/sounds/kick.mp3'
             }}/>
      <Wheel ref={this.drums.snare}
             initialState={{active: [4, 12]}}
             bpm={120} sound={{
               name: 'Snare',
               volume: 10,
               url: process.env.PUBLIC_URL + '/sounds/snare.mp3'
             }}/>
      <Wheel ref={this.drums.hihat}
             initialState={{active: [0, 2, 4, 6, 8, 10, 12, 14, 16]}}
             bpm={120} sound={{
               name: 'Hi-Hat',
               volume: 8,
               url: process.env.PUBLIC_URL + '/sounds/hat.mp3'
             }}/>
      <button onClick={this.handleClick}>{this.state.playing ? 'Stop' : 'Play'}</button></div>;
  }
}

export default Player;
