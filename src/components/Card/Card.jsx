import React from "react";
import styles from './Card.module.css'
import { useState } from "react";
import popupStyles from "../popup-full-image/PopupFullImage.module.css"
const Card = ({ title, image, price, id, setPopup }) => {
    const [text, stateButton] = useState('Read more')




    function habdleClickImage(e) {
        setPopup({ selector: `${popupStyles.popup} ${popupStyles.popupOpened}`, title: title, image: image })
    }

    function handleClickButton(e) {
        stateButton(text === 'Read more' ? 'Soon' : 'Read more')


    }
    return (
        <div key={id} className={styles.container}>
            <div className={styles.item}>
                <div onClick={habdleClickImage} className={styles.image} style={{
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