import React, { FC } from 'react';

interface Props {
  title: string;
}

const Button: FC<Props> = ({ title }) => {
  return <button>{title}</button>;
};

export default Button;
