import React, { Component } from 'react';

import MidiWriter from 'midi-writer-js';
import { Icon } from "@iconify/react";
import exportIcon from '@iconify/icons-uil/export';
import ReactTooltip from 'react-tooltip';

import Wheel from './Wheel';

import './Player.css';

class Player extends Component {
  constructor() {
    super();

    this.hasPlayed = false;
    this.state = {bpm: 120, playing: false};
    this.drums = {
      crash: React.createRef(),
      hihat: React.createRef(),
      kick: React.createRef(),
      snare: React.createRef()
    };
  }

  handleExportClick = () => {
    const tracks = Object.keys(this.drums).map(inst =>
      this.drums[inst].current.exportTrack()
    );
    const write = new MidiWriter.Writer(tracks);
    this.download('groove.mid', write.dataUri());
  }

  download(filename, data) {
    const element = document.createElement('a');
    element.setAttribute('href', data);
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  handleBpmChange = (event) => {
    const newBpm = parseInt(event.target.value);
    this.setState((state) => {
      return {...state, bpm: newBpm};
    });
  }

  handlePlayClick = () => {
    this.setState((state) => {
      return {...state, playing: !state.playing};
    });

    if (this.hasPlayed) {
      this.play();
    } else {
      this.drums.crash.current.preparePlay();
      this.drums.hihat.current.preparePlay();
      this.drums.kick.current.preparePlay();
      this.drums.snare.current.preparePlay();

      window.setTimeout(this.play, 100);
    }
  }

  play = () => {
    this.hasPlayed = true;

    this.drums.crash.current.playOrPause();
    this.drums.hihat.current.playOrPause();
    this.drums.kick.current.playOrPause();
    this.drums.snare.current.playOrPause();
  }

  render() {
    return <div className='Player' style={{width: '1000px', textAlign: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
      <Wheel ref={this.drums.crash}
             initialState={{active: [0]}}
             bpm={this.state.bpm} sound={{
               name: 'Crash',
               volume: 10,
               instrument: 49,
               url: process.env.PUBLIC_URL + '/sounds/crash.mp3'
             }}/>
      <Wheel ref={this.drums.kick}
             initialState={{active: [0, 8]}}
             bpm={this.state.bpm} sound={{
               name: 'Kick',
               volume: 10,
               instrument: 35,
               url: process.env.PUBLIC_URL + '/sounds/kick.mp3'
             }}/>
      <Wheel ref={this.drums.snare}
             initialState={{active: [4, 12]}}
             bpm={this.state.bpm} sound={{
               name: 'Snare',
               volume: 10,
               instrument: 38,
               url: process.env.PUBLIC_URL + '/sounds/snare.mp3'
             }}/>
      <Wheel ref={this.drums.hihat}
             initialState={{active: [0, 2, 4, 6, 8, 10, 12, 14, 16]}}
             bpm={this.state.bpm} sound={{
               name: 'Hi-Hat',
               volume: 8,
               instrument: 42,
               url: process.env.PUBLIC_URL + '/sounds/hat.mp3'
             }}/>
      <div className='bpm'><input maxLength={3} defaultValue={this.state.bpm} disabled={this.state.playing} onChange={this.handleBpmChange}/>bpm</div>
      <button onClick={this.handlePlayClick}>{this.state.playing ? 'Stop' : 'Play'}</button>
      <div style={{cursor: 'pointer', float: 'right'}} onClick={this.handleExportClick} data-tip='Export as MIDI' data-place='top'>
        <ReactTooltip/>
        <Icon icon={exportIcon} color='white'/>
      </div>
      </div>;
  }
}

export default Player;
