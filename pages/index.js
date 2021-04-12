import styles from '../styles/Home.module.css'

import definitions from '../data/definitions'
import { useState } from 'react'
/* import Treasure from '../assets/Treasure.svg' */
import Background from '../assets/Background.svg'

export const getStaticProps = async () => {
    return {
        props: {
            definitions
        }
    }
}

export default function Home(props) {

    const [word, setWord] = useState(null)
    const [phrase, setPhrase] = useState(null)

    const handleClick = () => {
        const keys = Object.keys(props.definitions)
        const choosenWord = keys[Math.floor(Math.random() * keys.length)]

        setWord(choosenWord)
        setPhrase(props.definitions[choosenWord])

    }

    return (
        <div className={styles.container}>
            <Background className={styles.top} />
            <Background className={styles.bottom} />
            <div className={styles.title}>
                <h1>Concurso Caja Creativa</h1>
                {/* <Treasure className={styles.tiny} /> */}
                {/* CHEST ICON - Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> */}
            </div>

            <main className={styles.main}>
                <section className={styles.wordColumn}>
                    <button onClick={handleClick}>Generar palabra</button>
                    {word && <h2>{word}</h2>}
                    {phrase && phrase.map((definition, i) => <p key={i}>{definition}</p>)}
                </section>

                <div className={styles.divider}></div>

                <section className={styles.genreColumn}>
                    <h2>Géneros</h2>
                    <p>Los géneros que podrás utilizar son:</p>
                    <div className={styles.genres}>
                        <a href="https://drive.google.com/file/d/199ssJrOpnlSIVhl6Mmtv96atP7GpmW3m/view?usp=sharing" target="_blank">Poesía</a>
                        <a href="">Cuento corto</a>
                        <a href="">Drabble</a>
                        <a href="">Columna de opinión</a>
                        <a href="">Ensayo argumentativo</a>
                    </div>
                    <p>Haz click en cada uno para ver sus criterios de evaluación.</p>
                    <div className={styles.form}>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfc4zlIXUA4ZgYXanoqynCWAf3EwmOKhAijHvkHwPluZEWz3Q/viewform" target="_blank">Enviar texto →</a>
                    </div>
                </section>
            </main>
        </div>
    )
}
