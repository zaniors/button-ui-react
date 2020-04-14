import React, { FC } from 'react';
import classNames from 'classnames';

const tuple = <T extends string[]>(...arg: T) => arg;
const ButtonTypes = tuple('primary', 'default', 'danger', 'link');
export type ButtonType = 'primary' | 'default' | 'danger' | 'link';
export type ButtonSize = 'large' | 'middle' | 'small';

interface IBaseButtonProps {
  size?: ButtonSize;
  type?: ButtonType;
  disabled?: boolean;
  href?: string;
  className?: string;
  children?: React.ReactNode;
}

const Button: FC<IBaseButtonProps> = (props) => {
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
    disabled: href && disabled,
  }, className)

  return (
    type === 'link' ?
      <a className={classes} href={href} {...rest}>{children}</a>
      : <button disabled={disabled} className={classes} {...rest}>{children}</button>
  )
}

export default Button