import truck from '../../images/gruzovik.svg'
import product from '../../images/product.svg'
import uniqueMenu from '../../images/menu.svg'
import delivery from '../../images/delivery.svg'
import React from "react";

const choiceCard = [
    {
        img:truck,
        title:'Мгновенная доставка',
        desc:'Доставим заказанную вами еду за 30 минут + напиток в подарок'
    },
    {
        img:product,
        title:'Свежие продукты',
        desc:'Вся продукция хранится в хороших условиях тем самым продливая срок хранения'
    },
    {
        img:uniqueMenu,
        title:'Уникальное меню',
        desc:'Ежедневно мы обновляем наше меню и том числе коктейльное'
    },
    {
        img:delivery,
        title:'Доставка',
        desc:'Мы быстро доставляем вашу еду по указанному адресу'
    },
]

export default choiceCard;