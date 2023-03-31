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
        <div className={styles.center}>
            <Background className={styles.top} />
            <Background className={styles.bottom} />
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>Concurso Caja Creativa</h1>
                </div>
                <p className={styles.subtitle}>Haz click para obtener tu palabra aleatoria. Luego, escribe un texto basado en ella.
                    <br />
                    Se premiará el mejor texto de cada categoría con un bono de $400.000 redimibles en las unidades duNord.
                </p>

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
                            <a target="_blank" href="https://uninorte-my.sharepoint.com/:w:/g/personal/escritura_uninorte_edu_co/EQb9YbLrtSxJiF0LwWlOPzIB_23aXJH5-Mt85FsVUpo4Dg?e=CKZmCR">Poesía</a>
                            <a target="_blank" href="https://uninorte-my.sharepoint.com/:w:/g/personal/escritura_uninorte_edu_co/EbziokVR4oZIp5bozteFFY8BL_7Rk6KrtAHJNJyHSmFpqg?e=qeNPax">Cuento corto</a>
                            <a target="_blank" href="https://uninorte-my.sharepoint.com/:w:/g/personal/escritura_uninorte_edu_co/EVLfQ2PqZ35NhZP4B1JSb_YBblG6I1tnsQoEvWObK1AZ8w?e=p0jPti">Drabble</a>
                            <a target="_blank" href="https://uninorte-my.sharepoint.com/:w:/g/personal/escritura_uninorte_edu_co/EWAyEzK-Y-lHq44nEckykXcB3LqQXc7upDs10jdhU1IG_g?e=T62s6H">Columna de opinión</a>
                            <a target="_blank" href="https://uninorte-my.sharepoint.com/:w:/g/personal/escritura_uninorte_edu_co/EV0qqXlRjeBGkXvym0Uj7hcBZCDK-MG7OFqAaW72W299Cg?e=L5BPUT">Ensayo argumentativo</a>
                        </div>
                        <p>Haz click en cada uno para ver sus criterios de evaluación. Puedes participar varias veces, pero solo podrás enviar un texto por palabra aleatoria.</p>
                        <p>Te esperamos en el Centro de Escritura ECO para potencializar tu relato. Pide la cita a través de nuestro correo electrónico <b>escritura@uninorte.edu.co</b> o visítanos en el Bloque K, piso 3.</p>
                        <div className={styles.form}>
                            <a href="https://forms.gle/SdE1bShRtdaLkdSH8" target="_blank">Enviar texto →</a>
                        </div>
                        <div className={styles.credits}>
                            <h2>Créditos</h2>
                            <p>Definiciones tomadas de la <a href="https://dle.rae.es/" target="_blank">RAE</a>
                                <br />
                                Concurso organizado por el <a href="https://www.uninorte.edu.co/escritura" target="_blank">Centro de Escritura ECO</a>
                            </p>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}
