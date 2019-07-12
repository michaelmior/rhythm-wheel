import React, { Component } from 'react';

import './Circle.css';

class Circle extends Component {
  render() {
    return <div className="Circle" style={{
      backgroundColor: this.props.backgroundColor,
      borderColor: this.props.borderColor,
      borderRadius: this.props.radius,
      width: this.props.radius,
      height: this.props.radius
    }}>{this.props.children}</div>;
  }
}

Circle.defaultProps = {
  backgroundColor: '#FFF',
  borderColor: '#000',
  radius: '100px'
};

export default Circle;
