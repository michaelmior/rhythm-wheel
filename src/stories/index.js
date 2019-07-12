import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Circle from '../Circle';
import Wheel from '../Wheel';

storiesOf('Circle', module).add('a simple circle', () => (
  <Circle/>
));

storiesOf('Wheel', module).add('a simple wheel', () => (
  <Wheel/>
), {
  backgrounds: [{
    name: 'grey', value: 'rgba(150, 150, 150)',
    default: true
  }]
});
