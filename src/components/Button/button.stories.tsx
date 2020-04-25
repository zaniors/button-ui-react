import React from "react";
import Button from "./button";
import { action } from '@storybook/addon-actions';

export default {
  title: '按钮组件',
  component: Button,
}

export const DefaultButton = () => <Button onClick={action('clicked')}>默认按钮</Button>
DefaultButton.story = {
  name: '默认按钮',
  parameters: {
    info: {
      text: '用于没有主次之分的一组行动点。'
    }
  }
}

export const ButtonWithSize = () => (
  <div>
    <Button size="sm">小号按钮</Button>
    <Button size="md">中号按钮</Button>
    <Button size="lg">大号按钮</Button>
  </div>
)
ButtonWithSize.story = {
  name: '按钮尺寸',
  parameters: {
    info: {
      text: `
        按钮有大、中、小三种尺寸。  
        通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。
      `
    }
  }
}

export const ButtonWithType = () => (
  <div>
    <Button type="primary">主要按钮</Button>
    <Button type="danger">危险按钮</Button>
    <Button type="link" href="https://compelcode.com/post/how-to-develop-a-react-component-4" target="_blank">Link按钮</Button>
  </div>
)
ButtonWithType.story = {
  name: '按钮类型',
  parameters: {
    info: {
      text: '按钮有三种类型：主要按钮、危险按钮和链接按钮。主按钮在同一个操作区域最多出现一次。'
    }
  }
}