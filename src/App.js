import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import Cart from "./pages/cartPage/Cart";
import Order from "./pages/orderPage/Order";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import './global.css';
import Header from "./pages/mainPage/Header";
import Footer from "./pages/mainPage/Footer";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/order" element={<Order/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
