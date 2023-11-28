import { FC } from 'react';

import cl from './Button.module.scss'

interface IButton {
    title: string | number,
    onClick?: ()=> void,
}

const Button: FC<IButton> = ({title, onClick}) => {
  return (
    <button className={cl.button} onClick={onClick}>
        {title}
    </button>
  );
};

export default Button;