import React from 'react';
import styles from './background.module.css'
import mousePic from '../../assets/images/mouse-picture.svg'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

const Background = () => {
    return (
        <>
            <div id="bgImg" className={styles.bgImg}/>
            <div id="bgBlack" className={styles.bgBlack}/>
            <div id="bgGrid" className={styles.bgGrid}/>
            <div className={styles.bgTitle}>
                <span className={styles.storageText}>СОБЕРИТЕ</span>
                <span className={styles.fruitText}>ФРУКТЫ</span>
            </div>
            <BrowserView>
                <div className={styles.helper}>
                    <img src={mousePic}/>
                    <span>Используйте мышь, что бы складывать яблоки в корзину</span>
                </div>
            </BrowserView>

        </>
    );
};

export default Background;