import React from 'react';
import img from '../../images/Vector 1.svg'
import logo from '../../images/LOgo.svg'
import phone from '../../images/phone.svg'
import corzina from '../../images/corzina.svg'
import style from './Header.module.css'
import {NavLink} from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';

const Header = () => {

    const setActive = ({ isActive }) =>(isActive ? "active" : "");

    return (
        <>
            <header className={style.header}>
                <nav className={style.navMenu}>
                    <ul className={style.ulMenu}>
                        <img src={logo} className={style.logoImg}/>
                        <li className={style.liMenu}>
                            <NavLink className={setActive} to="/">Главная</NavLink>
                        </li>
                        <li className={style.liMenu}>
                            <div className="dropdown">
                                <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Меню
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">Пицца</a>
                                    <a className="dropdown-item" href="#">Бургер</a>
                                    <a className="dropdown-item" href="#">Суши</a>
                                </div>
                            </div>
                        </li>
                        <li className={style.liMenu}>
                            <NavLink className={setActive} to="/order">Доставка</NavLink>
                        </li>
                        <li className={style.liMenu}>
                            <NavLink className={setActive} to="/ctg">Контакты</NavLink>
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