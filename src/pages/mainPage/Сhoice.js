import React from 'react';
import choiceCard from "../../data/choiceCard/choiceCard";
import styles from './Choice.module.css'

const ChoiceCard = (props) => {
    return(
        <div className={styles.choiceCard}>
            <img src={props.img}/>
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
        </div>
    )
}


const Сhoice = () => {
    return (
        <>
            <div className={styles.choiceBlock}>
                <h2>Почему выбирают нас:</h2>
                <div className='container-card'>
                    {
                        choiceCard.map((item,index) => {
                            return(
                                <ChoiceCard
                                    key={index}
                                    img={item.img}
                                    title={item.title}
                                    desc={item.desc}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default Сhoice;