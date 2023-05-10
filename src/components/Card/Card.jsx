import React from "react";
import styles from './Card.module.css'
import { useState } from "react";

const Card = ({ title, image, price, id }) => {

    const [text, stateButton] = useState('Read more')
    const [selector, stateImage] = useState(styles.image)
    function habdleClickImage(e) {
        stateImage(prev => {
            if (prev === styles.image) {
                document.addEventListener('click', overlayClick)
                return `${styles.image} ${styles.imageFullView}`
            } else {
                document.removeEventListener('click', overlayClick)
                return styles.image
            }
        })
    }


    function overlayClick(e) {
        if (e.target.style.backgroundImage !== `url("${image}")`) {
            stateImage(styles.image)
        }
    }

    function handleClickButton(e) {
        stateButton(text === 'Read more' ? 'Soon' : 'Read more')
        

    }
    return (
        <div key={id} className={styles.container}>
            <div className={styles.item}>
                <div onClick={habdleClickImage} className={selector} style={{
                    backgroundImage: `url('${image}')`,
                }}></div>
                <div className={styles.info}>
                    <h2 className={styles.itemTitle}>{title}</h2>
                    <p className={styles.price}>{price}</p>
                    <button onClick={handleClickButton} className={styles.button}>{text}</button>
                </div>
            </div>
        </div>
    )
}

export default Card