import React from "react";
import Button from "./button";
import { action } from '@storybook/addon-actions';

export default {
  title: '按钮组件',
  component: Button
}

const centerTextStyle: React.CSSProperties = {
  textAlign: 'center'
}
const CenterTextDecorator = (storyFn: () => React.ReactNode) => <div style={centerTextStyle}>{storyFn()}</div>

export const DefaultButton = () => <Button onClick={action('clicked')}>默认按钮</Button>
DefaultButton.story = {
  name: '默认按钮',
  decorators: [CenterTextDecorator]
}

export const ButtonWithSize = () => (
  <>
    <Button size="sm">小号按钮</Button>
    <Button size="md">中号按钮</Button>
    <Button size="lg">大号按钮</Button>
  </>
)
ButtonWithSize.story = {
  name: '按钮尺寸'
}

export const ButtonWithType = () => (
  <>
    <Button type="primary">主要按钮</Button>
    <Button type="danger">危险按钮</Button>
    <Button type="link" href="https://compelcode.com/post/how-to-develop-a-react-component-4" target="_blank">Link按钮</Button>
  </>
)
ButtonWithType.story = {
  name: '按钮类型'
}