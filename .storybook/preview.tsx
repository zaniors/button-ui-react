import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import '../src/scss/index.scss';
import './fix-storybook-table.scss';

const wrapperStyle: React.CSSProperties = {
  padding: '20px 40px'
}

const WrapperStyleDecorator = (storyFn) => <div style={wrapperStyle}>{storyFn()}</div>

addDecorator(WrapperStyleDecorator);
addDecorator(withInfo);
addParameters({
  info: {
    inline: true,
    header: false,
  }
})