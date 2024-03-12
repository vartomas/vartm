import React, { CSSProperties, FC, ReactNode } from 'react';
import style from 'button.module.css';

interface Props {
  title: ReactNode;
  className?: string;
  styles?: CSSProperties;
  onClick?: () => void;
}

const Button: FC<Props> = ({ title, className, styles, onClick }) => {
  return (
    <button className={className ?? style.button} style={styles} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
