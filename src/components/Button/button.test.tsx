import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button, { ButtonProps } from './button';

let defaultBtn: HTMLElement, myBtn: HTMLElement, clickBtn: HTMLElement, linkBtn: HTMLElement;
const clickProps = {
  onClick: jest.fn()
}
const createButton = () => {
  return (
    <>
      <Button>默认按钮</Button>
      <Button size="lg" type="danger" className="my-button">自定义按钮</Button>
      <Button {...clickProps}>事件按钮</Button>
      <Button type="link" href="https://google.com" target="_blank">Link按钮</Button>
    </>
  )
};

describe('测试Button组件', () => {
  beforeEach(() => {
    const { getByText } = render(createButton());
    defaultBtn = getByText('默认按钮');
    myBtn = getByText('自定义按钮');
    clickBtn = getByText('事件按钮');
    linkBtn = getByText('Link按钮');
  })
  test('测试Button的默认class样式类名是否存在', () => {
    expect(defaultBtn).toBeInTheDocument();
    expect(defaultBtn).toHaveClass('g-btn g-btn-default g-btn-md')
  })
  test('测试Button的自定义属性是否有效', () => {
    expect(myBtn).toBeInTheDocument();
    expect(myBtn).toHaveClass('g-btn g-btn-danger g-btn-lg');
  })
  test('测试Button的点击事件是否有效', () => {
    expect(clickBtn).toBeInTheDocument();
    fireEvent.click(clickBtn);
    expect(clickProps.onClick).toHaveBeenCalled();
  })
  test('测试Button的Link类型是否有效', () => {
    expect(linkBtn).toBeInTheDocument();
    expect(linkBtn).toHaveClass('g-btn g-btn-link')
    expect(linkBtn).toHaveProperty('href', 'https://google.com/');
    expect(linkBtn).toHaveProperty('target', '_blank');
  })
})