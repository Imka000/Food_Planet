import React from 'react';
import styles from "./Menu.module.css";
import img from '../../images/Vector 1.svg'
import menuCard from "../../data/menuCard/menuCard";
import menuCard2 from "../../data/menuCard/menuCard2";

const MenuCard = (props) => {
    return(
        <div className={styles.menuCard}>
            <div className={styles.menuCardContent}>
                <img src={props.img}/>
                <h3>{props.name}</h3>
                <p className={styles.menuCardDesc}>{props.desc}</p>
                <p className={styles.menuCardPrice}>{props.price}</p><br/>
                <button className={styles.menuCardBtn}>&#8722;</button> <b>1</b> <button className={styles.menuCardBtn}>&#43;</button>
                <button className={styles.menuCardCart}>В КОРЗИНУ</button>
            </div>
        </div>
    )
}

const Menu = () => {
    return (
        <>
            <div className={styles.menu}>
                <div className={styles.menuList}>
                    <h2>Меню</h2>
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
                <div className={styles.select}>
                    <p className={styles.menuSort}>Сортировать по:</p>
                    <select>
                        <option value="">По умолчанию <img src={img}/></option>
                        <option value="">Возрастанию цены</option>
                        <option value="">Новинки</option>
                    </select>
                </div>
            </div>
            <div className='global-container-cardProduct'>
                {
                    menuCard.map((item,index)=>{
                        return(
                            <MenuCard
                                key={index}
                                img={item.img}
                                name={item.name}
                                desc={item.desc}
                                price={item.price}
                            />
                        )
                    })
                }
            </div>
            <div className='global-container-cardProduct'>
                {
                    menuCard2.map((item,index)=>{
                        return(
                            <MenuCard
                                key={index}
                                img={item.img}
                                name={item.name}
                                desc={item.desc}
                                price={item.price}
                            />
                        )
                    })
                }
            </div>
            <div className={styles.btnShowMenu}>
                <button>ПОКАЗАТЬ ЕЩЕ</button>
            </div>
        </>
    );
};

export default Menu;