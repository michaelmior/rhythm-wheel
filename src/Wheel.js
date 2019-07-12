import React, { Component } from 'react';

import Circle from './Circle';

const smallRadius = 2;
const padding = 10;

class Wheel extends Component {
  pointCoords(subdivision) {
    const angle = (Math.PI * 2) / this.props.subdivisions * subdivision;
    const x = this.props.radius / 2 - smallRadius + Math.sin(angle) * (this.props.radius + smallRadius) / 2 + padding;
    const y = this.props.radius / 2 - smallRadius + Math.cos(angle) * (this.props.radius + smallRadius) / 2 + padding;

    return {x, y};
  }

  render() {
    return <div style={{position: 'relative', padding: padding + 'px'}}>
      <Circle borderColor='white' radius={this.props.radius + 'px'}>{Array.from({length: this.props.subdivisions}, (_, i) => {
      const coords = this.pointCoords(i);
      return <div key={i} style={{
        cursor: 'pointer',
        position: 'absolute',
        top: coords.y + 'px',
        left: coords.x + 'px'
      }}>
        <Circle borderColor='white' backgroundColor='white' radius={(smallRadius * 2)+ 'px'}/>
      </div>
      })}</Circle>
    </div>;
  }
}

Wheel.defaultProps = {
  subdivisions: 16,
  radius: 200
};

export default Wheel;
