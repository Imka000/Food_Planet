import React from 'react';
import img from '../images/Vector 1.svg'
import logo from '../images/LOgo.svg'
import phone from '../images/phone.svg'
import corzina from '../images/corzina.svg'
import style from '../styles/Header.module.css'

const Header = () => {
    return (
        <>
          <header className={style.header}>
              <div className={style.logoImg}>
                  <img src={logo} alt=""/>
              </div>
              <nav className={style.navMenu}>
                  <ul className={style.ulMenu}>
                      <li className={style.liMenu}><a href="#">Главная</a></li>
                      <li className={style.liMenu}><a href="#">Меню</a> <img src={img} alt=""/></li>
                      <li className={style.liMenu}><a href="#">Доставка</a></li>
                      <li className={style.liMenu}><a href="#">Контакты</a></li>
                      <li className={style.liMenu}><img src={phone}/><a href="#"> +996500405988</a></li>
                      <li><img src={corzina}/> <a href="#" className={style.linkHeader}>1</a></li>
                  </ul>
              </nav>
          </header>
        </>
    );
};

export default Header;