import React from 'react';
import Header from "../mainPage/Header";
import CartContent from "./CartContent";
import Footer from "../mainPage/Footer";
import {BrowserRouter} from "react-router-dom";

const Cart = () => {
    return (
        <>
            <Header/>
            <CartContent/>
            <Footer/>
        </>
    );
};

export default Cart;