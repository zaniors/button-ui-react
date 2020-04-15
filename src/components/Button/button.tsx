import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import classNames from 'classnames';

export type ButtonType = 'primary' | 'default' | 'danger' | 'link';
export type ButtonSize = 'lg' | 'md' | 'sm';

interface IBaseButtonProps {
  size?: ButtonSize;
  type?: ButtonType;
  disabled?: boolean;
  href?: string;
  className?: string;
  children?: React.ReactNode;
}

type INativeButtonProps = ButtonHTMLAttributes<HTMLElement>;
type INativeAnchorProps = AnchorHTMLAttributes<HTMLElement>;

type ButtonProps = Omit<INativeButtonProps, 'type'> & INativeAnchorProps & IBaseButtonProps;

const Button: FC<ButtonProps> = (props) => {
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


export default Button