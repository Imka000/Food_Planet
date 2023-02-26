import React from 'react';
import styles from './CartContent.module.css'
import ches from '../../images/ches2.svg'
import pizza from '../../images/pizza3.svg'
import {Link} from "react-router-dom";

const CartContent = () => {
    return (
        <>
            <div className={styles.cart}>
                <div className={styles.cartTitle}>
                    <h2>Корзина</h2>
                    <h3>Товары в вашей корзине</h3>
                </div>
                <div className={styles.productTitle}>
                    <p>Продукт</p>
                    <p className={styles.quantity}>Количество</p>
                    <p>Цена</p>
                    <p>К оплате</p>
                </div>
                <div>
                    <div>
                        <hr className={styles.Line}/>
                    </div>
                    <div className={styles.productCart}>
                        <img className={styles.productCartImg} src={ches}/>
                        <p>Чизбургер</p>
                        <input type="number" defaultValue='1'/>
                        <p>200 сом</p>
                        <p className={styles.productCartTotal}>200 сом <button><span
                            className={styles.productCartClose}>&#10005;</span></button></p>
                    </div>
                    <div>
                        <hr className={styles.Line}/>
                    </div>
                    <div className={styles.productCart}>
                        <img className={styles.productCartImg} src={ches}/>
                        <p>Чизбургер</p>
                        <input type="number" defaultValue='1'/>
                        <p>200 сом</p>
                        <p className={styles.productCartTotal}>200 сом <button><span
                            className={styles.productCartClose}>&#10005;</span></button></p>
                    </div>
                    <div>
                        <hr className={styles.Line}/>
                    </div>
                    <div className={styles.cartTotal}>
                        <h3>Итого: <span>400 сом</span></h3>
                        <Link to='/order'>
                            <button>ОФОРМИТЬ ЗАКАЗ</button>
                        </Link>
                    </div>
                    <div className={styles.linkTotal}>
                        <Link to="/">  &lt; Продолжить покупки</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartContent;