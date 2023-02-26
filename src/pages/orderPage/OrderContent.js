import React from 'react';
import styles from './OrderContent.module.css'
import ches from "../../images/ches2.svg";

const OrderContent = () => {
    return (
        <>
            <div>
                <div>
                    <h2 className={styles.orderContentTitle}>Оформление заказа</h2>
                </div>
                <div className={styles.orderContentInput}>
                    <input className={styles.contentInput} type="text" placeholder="Фамилия"/>
                    <input className={styles.contentInput} type="text" placeholder="Имя"/>
                </div>
                <div className={styles.orderContentInput}>
                    <input className={styles.contentInput} type="number" placeholder="Мобильный телефон"/>
                    <input className={styles.contentInput} type="email" placeholder="Email"/>
                </div>
            </div>
            <div className={styles.confirmOrderCard}>
                <div className={styles.productContent}>
                    <h3>Ваш заказ</h3>
                    <div className={styles.productTitle}>
                        <p>Продукт</p>
                        <p>Количество</p>
                        <p>Цена</p>
                        <p>К оплате</p>
                    </div>
                    <div>
                        <hr className={styles.Line}/>
                    </div>
                    <div className={styles.productOrder}>
                        <img className={styles.productOrderImg} src={ches}/>
                        <p>Чизбургер</p>
                        <p>1</p>
                        <p>200 сом</p>
                        <p className={styles.productOrderTotal}>200 сом </p>
                    </div>
                    <div>
                        <hr className={styles.Line}/>
                    </div>
                    <div className={styles.productOrder}>
                        <img className={styles.productOrderImg} src={ches}/>
                        <p>Чизбургер</p>
                        <p>1</p>
                        <p>200 сом</p>
                        <p className={styles.productOrderTotal}>200 сом </p>
                    </div>
                    <div>
                        <hr className={styles.Line}/>
                    </div>
                </div>
                <div className={styles.confirmOrder}>
                    <p className={styles.confirmOrderTitle}>Промокод</p>
                    <input type="text" placeholder="Введите промокод"/>
                    <p className={styles.confirmOrderTotal}>Итого:</p>
                    <p className={styles.confirmOrderProduct}>1 товар на сумму</p><span>200сом</span>
                    <p className={styles.confirmOrderPay}>К оплате</p>  <span>200сом</span>
                    <button className={styles.confirmOrderBtn}>Подтвердить заказ</button>
                    <p className={styles.confirmOrderText}>Подтверждая заказ, я принимаю условия <a
                        className={styles.link}
                        href="#">пользовательского
                        соглашения</a></p>
                </div>
            </div>
            <div className={styles.delivery}>
                <div>
                    <h3>Адрес доставки</h3>
                    <label className={styles.deliveryLabel}>
                        <input type="radio" name="address"/>
                        Самовывоз
                    </label>
                    <label className={styles.deliveryLabel}>
                        <input type="radio" name="address" checked/>
                        Курьерская доставка
                    </label>
                    <div>
                        <select>
                            <option>Бишкек</option>
                            <option>Кара-Балта</option>
                            <option>Кант</option>
                        </select>
                        <input type="text" placeholder="Введите адрес доставки"/>
                    </div>
                </div>
            </div>
            <div className={styles.payment}>
                <div>
                    <h3>Способ оплаты</h3>
                    <label className={styles.paymentLabel}>
                        <input type="radio" name="payment"/>
                        Наличными
                    </label>
                    <label className={styles.paymentLabel}>
                        <input type="radio" name="payment"/>
                        Банковский перевод
                    </label>
                    <label className={styles.paymentLabel}>
                        <input type="radio" name="payment"/>
                        Оплата картой,электронными кошельками на сайте
                    </label>
                    <label className={styles.paymentLabel}>
                        <input type="radio" name="payment"/>
                        Денежный перевод
                    </label>
                </div>
            </div>
            <div className={styles.comment}>
                <div>
                    <h3>Комментарий к заказу</h3>
                    <textarea className={styles.commentText}></textarea>
                </div>
            </div>
        </>
    );
};

export default OrderContent;