import React from 'react';
import img from '../../images/Vector 1.svg'
import logo from '../../images/LOgo.svg'
import phone from '../../images/phone.svg'
import corzina from '../../images/corzina.svg'
import style from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <>
            <header className={style.header}>
                <nav className={style.navMenu}>
                    <ul className={style.ulMenu}>
                        <img src={logo} className={style.logoImg}/>
                        <li className={style.liMenu}>
                            <NavLink to="/">Главная</NavLink>
                        </li>
                        <li className={style.liMenu}>
                            <NavLink to="/">Меню <img src={img}/></NavLink>
                        </li>
                        <li className={style.liMenu}>
                            <NavLink to="/">Доставка</NavLink>
                        </li>
                        <li className={style.liMenu}>
                            <NavLink to="/">Контакты</NavLink>
                        </li>
                        <li className={style.liMenu}>
                            <img src={phone}/><a href="#"> +996500405988</a>
                        </li>
                        <li>
                            <NavLink to='/cart' className={style.linkHeader}><img src={corzina}/>2</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;