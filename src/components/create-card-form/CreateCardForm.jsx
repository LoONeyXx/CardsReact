import styles from './CreateCardForm.module.css'
import { useState } from 'react'


function CreateCardForm({ setCards }) {

    const [data, setData] = useState({ title: '', price: '', image: '' })


    function addCar(e) {
        e.preventDefault()
        setCards(prev => [{ id: prev.length + 1, ...data }, ...prev])
    }

    function renderInputs(e, inputName) {
        setData(prev => ({ ...prev, [inputName]: e.target.value }))
    }


    return (
        <form className={styles.form} action="#">
            <input value={data.title} onChange={(e) => renderInputs(e, 'title')} placeholder='Название' className={styles.input} name='Title' type="text" />
            <input value={data.price} onChange={(e) => renderInputs(e, 'price')} placeholder='Цена' className={styles.input} name="Price" type="text" />
            <input value={data.image} onChange={(e) => renderInputs(e, 'image')} placeholder='Картинка' className={styles.input} name="Image" type="text" />
            <button onClick={addCar} className={styles.button}>Добавить</button>
        </form >
    )
}

export default CreateCardForm