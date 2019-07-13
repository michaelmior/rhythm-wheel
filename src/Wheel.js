import React, { Component } from 'react';

import Circle from './Circle';

const smallRadius = 2;
const padding = 10;

class Wheel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: [],
      ...props.initialState
    };
  }

  pointCoords(subdivision) {
    const angle = (Math.PI * 2) / this.props.subdivisions * subdivision;
    const x = this.props.radius / 2 - smallRadius + Math.sin(angle) * (this.props.radius + smallRadius) / 2 + padding;
    const y = this.props.radius / 2 - smallRadius + Math.cos(angle) * (this.props.radius + smallRadius) / 2 + padding;

    return {x, y};
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

    return <div style={{position: 'relative', padding: padding + 'px'}}>
      <svg style={{pointerEvents: 'none', position: 'absolute', top: padding / 2 + 'px', left: padding / 2 + 'px', zIndex: 100}} width={this.props.radius + smallRadius * 4} height={this.props.radius + smallRadius * 4}>
        {lines}
      </svg>
      <Circle borderColor='white' radius={this.props.radius + 'px'}>{Array.from({length: this.props.subdivisions}, (_, i) => {
      const coords = this.pointCoords(i);
      return <div key={'refCircle' + i} style={{
        cursor: 'pointer',
        position: 'absolute',
        top: coords.y + 'px',
        left: coords.x + 'px'
      }}>
        <Circle borderColor='white' backgroundColor='white' radius={(smallRadius * 2) + 'px'}/>
      </div>
      })}</Circle>
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
    </div>;
  }
}

Wheel.defaultProps = {
  subdivisions: 16,
  radius: 200
};

export default Wheel;
