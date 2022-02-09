import React from 'react';
import styles from './HomePage.module.css'
import beeline from '../icons/beeline.png'
import mts from '../icons/mts.png'
import tele2 from '../icons/tele2.png'
import yota from '../icons/yota.png'
import megafon from '../icons/megafon.png'

import { useNavigate } from "react-router-dom";



const HomePage = ({setIndex}) => {

    let operators = [beeline, megafon, mts, tele2, yota]

    const handleClick = (index) => {
        navigate("../pay", { replace: true })
        setIndex(index)
    }

    let navigate = useNavigate();

    return (
        <div>
            <div className={styles.hp__container}>
                {
                    operators.map((elem, index) => (
                        <div key={elem+index} onClick={() => handleClick(index)} className={styles.operators__block} >
                            <div className={styles.operators__item}>
                                <img src={elem} alt="" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

    );
};

export default HomePage;