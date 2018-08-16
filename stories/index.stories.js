import React from 'react';

import { storiesOf } from '@storybook/react';
import { ClockfaceExampleComponent } from '../modules';

storiesOf('Clockface Example', module)
  .add('without props', () => <ClockfaceExampleComponent />)
  .add('With custom text', () => <ClockfaceExampleComponent customText="This text is passed through props" />)
