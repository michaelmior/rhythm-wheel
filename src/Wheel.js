import React, { Component } from 'react';

import Circle from './Circle';

import './Wheel.css';

const smallRadius = 2;
const padding = 10;

class Wheel extends Component {
  constructor(props) {
    super(props);

    this.audioContext = null;
    this.playing = false;
    this.state = {
      active: [],
      ...props.initialState
    };

    this.playOrPause = this.playOrPause.bind(this);
    this.scheduler = this.scheduler.bind(this);
    this.bounce = React.createRef();
    this.refCircle = React.createRef();
  }

  soundLoader(path) {
    var soundObject = {};
    var getSound = new XMLHttpRequest();

    getSound.open('GET', path, true);
    getSound.responseType = 'arraybuffer';
    getSound.onload = () => {
      this.audioContext.decodeAudioData(getSound.response, (buffer) => {
        soundObject.soundToPlay = buffer;
      });
    }
    getSound.send();

    soundObject.play = (time) => {
      var volume = this.audioContext.createGain();
      volume.gain.value = this.props.sound.volume;
      var playSound = this.audioContext.createBufferSource();
      playSound.buffer = soundObject.soundToPlay;

      // Volume control
      playSound.connect(volume);
      volume.connect(this.audioContext.destination);
      playSound.start(time);
    }

    return soundObject;
  }

  scheduler() {
    window.requestAnimationFrame(() => this.updateBounce());
    while (this.futureTickTime < this.audioContext.currentTime + 0.1) {
      this.playOrNot();
      this.futureTick();
    }
    this.timeout = window.setTimeout(this.scheduler, 50.0);
  }

  playOrNot() {
    if (!this.state.active.includes(this.current)) {
      return;
    }

    this.refCircle.current.setAttribute('class', 'pulse-anim');
    window.setTimeout(() => {
      this.refCircle.current.setAttribute('class', '');
    }, 100);

    this.soundBuffer.play(this.futureTickTime);
  }

  playOrPause() {
    if (this.props.sound && !this.audioContext) {
      this.audioContext = new AudioContext();
      this.soundBuffer = this.soundLoader(this.props.sound.url);
    }

    this.playing = !this.playing;
    this.startTickTime = this.audioContext.currentTime;
    if (this.playing) {
      this.current = 0;
      this.futureTickTime = this.audioContext.currentTime;
      this.scheduler();
      this.bounce.current.style.webkitAnimationPlayState = 'running';
    } else {
      this.bounce.current.style.webkitAnimationPlayState = 'paused';
      this.updateBounce();
      window.clearTimeout(this.timeout);
    }
  }

  updateBounce() {
    const coords = this.pointCoords((this.audioContext.currentTime - this.startTickTime) * (this.props.bpm / 15) % this.props.subdivisions);
    this.bounce.current.style.top = coords.y + 'px';
    this.bounce.current.style.left = coords.x + 'px';
  }

  futureTick() {
    var noteLength = 60 / this.props.bpm;
    this.futureTickTime += 0.25 * noteLength;
    this.current = (this.current + 1) % (this.props.subdivisions);
  }

  pointCoords(subdivision) {
    const angle = (Math.PI * 2) / this.props.subdivisions * subdivision;
    const x = this.props.radius / 2 - smallRadius + Math.sin(angle) * (this.props.radius + smallRadius) / 2 + padding;
    const y = this.props.radius - (this.props.radius / 2 - smallRadius + Math.cos(angle) * (this.props.radius + smallRadius) / 2) + padding / 2;

    return {x, y};
  }

  handleClick = (beat) => {
    this.setState((state) => {
      let active = state.active.slice();
      if (active.includes(beat)) {
        const index = active.indexOf(beat);
        active.splice(index, 1);
      } else {
        active.push(beat);
        active.sort((a, b) => a - b);
      }
      return {...state, active};
    });
  }

  render() {
    let lines = [];
    let lineIndexes = this.state.active.slice();
    lineIndexes.push(lineIndexes[0]);
    for (let i = 1; i < lineIndexes.length; i++) {
      const coords = this.pointCoords(lineIndexes[i]);
      const prevCoords = this.pointCoords(lineIndexes[i - 1]);
      lines.push(<line key={'line' + i} x1={coords.x} y1={coords.y} x2={prevCoords.x} y2={prevCoords.y} stroke='black' strokeWidth='2' />);
    }

    const coords = this.pointCoords(0);
    return <div className='Wheel' style={{position: 'relative', padding: padding + 'px', display: 'inline-block'}}>
      <svg style={{pointerEvents: 'none', position: 'absolute', top: padding / 2 + 'px', left: padding / 2 + 'px', zIndex: 100}} width={this.props.radius + smallRadius * 4} height={this.props.radius + smallRadius * 4}>
        {lines}
      </svg>

      <div ref={this.bounce} className='bounce' style={{position: 'absolute', top: coords.y + 'px', left: coords.x + 'px', zIndex: 999, pointerEvents: 'none'}}>
        <Circle borderColor='goldenrod' backgroundColor='goldenrod' radius={(smallRadius * 2) + 'px'}/>
      </div>

      <div ref={this.refCircle}>
        <Circle borderColor='white' radius={this.props.radius + 'px'}>{Array.from({length: this.props.subdivisions}, (_, i) => {
        const coords = this.pointCoords(i);
        return <div key={'refCircle' + i} style={{
          cursor: 'pointer',
          position: 'absolute',
          top: (coords.y - padding - smallRadius * 1.6) + 'px',
          left: (coords.x - padding - smallRadius * 1.5) + 'px'
        }} onClick={this.handleClick.bind(this, i)}>
          <Circle borderColor='white' backgroundColor='white' radius={(smallRadius * 2) + 'px'}/>
        </div>
        })}</Circle>
      </div>
      {this.state.active.map(i => {
        const coords = this.pointCoords(i);
        return <div key={'beatCircle' + i} style={{
          position: 'absolute',
          top: coords.y + 'px',
          left: coords.x + 'px',
          pointerEvents: 'none'
        }}>
          <Circle borderColor='black' backgroundColor='black' radius={(smallRadius * 2) + 'px'}/>
        </div>
      })}
      <div className='name'>{this.props.sound.name}</div>
    </div>;
  }
}

Wheel.defaultProps = {
  subdivisions: 16,
  radius: 200
};

export default Wheel;
