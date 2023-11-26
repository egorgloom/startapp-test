import { FC } from 'react';

import cl from './Header.module.scss';

import { IoLogoAngular } from "react-icons/io";
import { RiShoppingCartLine } from "react-icons/ri";

interface IHeader {}

const Header: FC<IHeader> = () => {
  return (
    <header className={cl.header}>
        <IoLogoAngular className={cl.logo}/>
        <input type="text" className={cl.input} placeholder="Search"/>
        <RiShoppingCartLine className={cl.card}/>
    </header>
  );
};

export default Header;