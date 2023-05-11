import styles from './PopupFullImage.module.css'
import { useState } from 'react'




function Popup({ options, setPopup }) {
    return (
        <div onClick={() => setPopup(prev => setPopup({ ...prev, selector: styles.popup }))} className={options.selector}>
            <div className={styles.image} style={{
                backgroundImage: `url(${options.image})`
            }}></div>
            <p className={styles.title}>{options.title}</p>
        </div>
    )
}

export default Popup