import Card from '../../Card/Card'
import styles from './Home.module.css'
import CreateCardForm from '../../create-card-form/CreateCardForm'
import { useState } from 'react'

export const cardsData = [
    {
        id: 1,
        title: 'Porsche',
        price: 222.444,
        image: 'https://avatars.mds.yandex.net/i?id=a147c057306cbe892b91e54b51fb6279212d9e3e-8371311-images-thumbs&n=13'
    },
    {
        id: 2,
        title: 'Audi',
        price: 123.124,
        image: 'https://avatars.mds.yandex.net/i?id=16c320990e0bc080de35a284f6452cc497df34b7-8981391-images-thumbs&n=13'
    },
    {
        id: 3,
        title: 'Toyota',
        price: 354.768,
        image: 'https://avatars.mds.yandex.net/i?id=d4783c4439b4f60d3565eed0a0591b2ac1e5fefd-4011133-images-thumbs&n=13'
    },
    {
        id: 4,
        title: 'Opel',
        price: 145.423,
        image: 'https://avatars.mds.yandex.net/i?id=e3771c0c68137be98312b7cc8e2e5e1ae9269494-7937305-images-thumbs&n=13'
    },
    {
        id: 5,
        title: 'Nissan',
        price: 654.323,
        image: 'https://avatars.mds.yandex.net/i?id=073b4e8989490ab5648afbbddceafa0887026834-8449089-images-thumbs&n=13'
    },
]

const Home = () => {

console.log(useState(''))
    const [cards, setCards] = useState(cardsData)

    return (
        <div className={styles.main}>
            <h1 className={styles.title}>Автомобили</h1>
            <CreateCardForm setCards={setCards}/>
            <div className={styles.cardsContainer}>
                {cards.map(card => <Card key={card.id} title={card.title} price={card.price} image={card.image} />)}
            </div>

        </div>


    )
}


export default Home