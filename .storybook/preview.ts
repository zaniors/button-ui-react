import { addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import '../src/scss/index.scss';

addDecorator(withInfo);
addParameters({
  info: {
    inline: true
  }
})