import React from 'react';
import styles from './Footer.module.css'
import logo from '../../images/logoFooter.svg'
import phone from '../../images/phoneFooter.svg'
import style from "./Header.module.css";
import img from "../../images/Vector 1.svg";
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer>
                <div className={styles.navFooter}>
                    <ul className={style.ulMenu}>
                        <img className={styles.logoImg} src={logo}/>
                        <li className={style.liMenu}>
                            <NavLink to="/">Главная</NavLink>
                        </li>
                        <li className={style.liMenu}>
                            <NavLink to="/">Меню<img src={img}/></NavLink>
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
                    </ul>
                </div>
            </footer>
        </>
    );
};

export default Footer;