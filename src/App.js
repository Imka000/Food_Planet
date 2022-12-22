import React from 'react';
import Header from "./components/Header";
import MainMenu from "./components/MainMenu";
import Novelties from "./components/Novelties";
import Menu from "./components/Menu";
import Сhoice from "./components/Сhoice";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
          <Header/>
          <MainMenu/>
          <Novelties/>
          <Menu/>
          <Сhoice/>
          <Reviews/>
          <Footer/>
        </>
    );
};

export default App;
