import React from 'react';
import styles from './Novelties.module.css'
import cheesburger1 from '../../images/Tofu-Burger-PNG-Image 2.svg'
import cheesburger2 from '../../images/ches2.svg'
import cheesburger3 from '../../images/chees3.svg'
import cheesburger4 from '../../images/chees4.svg'
import noveltiesCard from "../../data/noveliesCard/noveltiesCard";

const NoveltiesCard = (props) => {
    return(
            <div className={styles.noveltiesCard}>
                <div className={styles.noveltiesCardContent}>
                    <img src={props.img}/>
                    <h3>{props.name}</h3>
                    <p className={styles.noveltiesCardDesc}>{props.desc}</p>
                    <p className={styles.noveltiesCardPrice}>{props.price}</p><br/>
                    <button className={styles.noveltiesCardBtn}>&#8722;</button> <b>1</b> <button className={styles.noveltiesCardBtn}>&#43;</button>
                    <button className={styles.noveltiesCardCart}>В КОРЗИНУ</button>
                </div>
            </div>
    )
}

const Novelties = () => {
    return (
        <>
            <div className={styles.novelties}>
                <div className={styles.noveltiesMenu}>
                    <h2>Новинки</h2>
                    <ul>
                        <li><a href="#">Пицца</a></li>
                        <li><a href="#">Бургер</a></li>
                        <li><a href="#">Суши</a></li>
                        <li><a href="#">Роллы</a></li>
                        <li><a href="#">Салаты</a></li>
                        <li><a href="#">Десерты</a></li>
                        <li><a href="#">Напитки</a></li>
                    </ul>
                </div>
            </div>
            <div className='container-card'>
            {
                noveltiesCard.map((item,index) =>{
                    return(
                        <NoveltiesCard
                            key={index}
                            img={item.img}
                            name={item.name}
                            desc={item.desc}
                            price={item.price}
                        />
                    )}
                )}
            </div>
        </>
    );
};

export default Novelties;