import styles from '../styles/Home.module.css'

import definitions from '../data/definitions'
import { useState } from 'react'

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
      <button onClick={handleClick}>Give me a word</button>
      {word && <h2>{word}</h2>}
      {phrase && <p>{phrase}</p>}
    </div>
  )
}
