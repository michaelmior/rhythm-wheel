import React from 'react';

import { storiesOf } from '@storybook/react';

import Circle from '../Circle';
import Wheel from '../Wheel';
import Player from '../Player';

storiesOf('Circle', module).add('a simple circle', () => (
  <Circle/>
));

storiesOf('Wheel', module).add('a simple wheel', () => (
  <Wheel initialState={{active: [1, 8, 9, 13]}} bpm={120}/>
), {
  backgrounds: [{
    name: 'grey', value: 'rgba(150, 150, 150)',
    default: true
  }]
});

storiesOf('Player', module).add('a simple player', () => (
  <Player/>
), {
  backgrounds: [{
    name: 'grey', value: 'rgba(150, 150, 150)',
    default: true
  }]
});
