import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import classNames from 'classnames';

export type ButtonType = 'primary' | 'default' | 'danger' | 'link';
export type ButtonSize = 'lg' | 'md' | 'sm';

interface IBaseButtonProps {
  /** 按钮的大小 */
  size?: ButtonSize;
  /** 按钮的类型 */
  type?: ButtonType;
  /** 按钮是否禁用 */
  disabled?: boolean;
  /** 同A标签的原生属性  */
  href?: string;
  className?: string;
  children?: React.ReactNode;
}

type INativeButtonProps = ButtonHTMLAttributes<HTMLElement>;
type INativeAnchorProps = AnchorHTMLAttributes<HTMLElement>;

export type ButtonProps = Omit<INativeButtonProps, 'type'> & INativeAnchorProps & IBaseButtonProps;

/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 * ~~~js
 * import { Button } from 'bui-react'
 * ~~~
 */
export const Button: FC<ButtonProps> = (props) => {
  const {
    size,
    type,
    disabled,
    href,
    className,
    children,
    ...rest
  } = props;
  const prefixCls = 'g-btn';

  const classes = classNames(prefixCls, {
    [`g-btn-${size}`]: size,
    [`g-btn-${type}`]: type,
    disabled: href && type === 'link' && disabled,
  }, className)

  return (
    href && type === 'link' ?
      <a className={classes} href={href} {...rest}>{children}</a>
      :
      <button disabled={disabled} className={classes} {...rest}>{children}</button>
  )
}

Button.defaultProps = {
  disabled: false,
  size: 'md',
  type: 'default'
}


export default Button;