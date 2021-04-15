import styles from '../styles/Home.module.css'

import definitions from '../data/definitions'
import { useState } from 'react'
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
            </div>
            <p className={styles.subtitle}>Haz click para obtener tu palabra aleatoria. Luego, escribirás un texto basado en ella.</p>

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
                        <a href="">Poesía</a>
                        <a href="">Cuento corto</a>
                        <a href="">Drabble</a>
                        <a href="">Columna de opinión</a>
                        <a href="">Ensayo argumentativo</a>
                    </div>
                    <p>Haz click en cada uno para ver sus criterios de evaluación.</p>
                    <div className={styles.form}>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfc4zlIXUA4ZgYXanoqynCWAf3EwmOKhAijHvkHwPluZEWz3Q/viewform" target="_blank">Enviar texto →</a>
                    </div>
                    <div className={styles.credits}>
                        <h2>Créditos</h2>
                        <p>Ícono por Freepik en Flaticon
                            <br />
                        Definiciones tomadas de la RAE
                        </p>
                    </div>
                </section>
            </main>
        </div>
    )
}
