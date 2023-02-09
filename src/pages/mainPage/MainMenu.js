import React from 'react';
import btnImg from '../../images/mainStrelka.svg'
import styles from './MainMenu.module.css'
import burger from '../../images/бургер.svg'

const MainMenu = () => {
    return (
        <>
            <div className={styles.mainMenu}>
                <div className={styles.about_us}>
                    <p className={styles.mainDesc}>Доставка вкусной еды до 30 минут + напиток в подарок!</p>
                    <p className={styles.desc}>Доставим заказ вовремя и можете рассчитывать, что еда будет доставлен
                        всегда горячим и ароматным.</p>
                    <button className={styles.mainBtn}>Перейти в меню <img className={styles.btnImg} src={btnImg}/>
                    </button>
                </div>
                <img src={burger} className={styles.mainImg}/>
            </div>
        </>
    );
};

export default MainMenu;