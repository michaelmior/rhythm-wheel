import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Circle from '../Circle';

storiesOf('Circle', module).add('a simple circle', () => (
  <Circle/>
));
