import React, { FC, ReactNode } from 'react';
import styles from 'button.module.css';

interface Props {
  title: ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: FC<Props> = ({ title, className, onClick }) => {
  return (
    <button className={className ? styles.button : className} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
