import { useSelector } from 'react-redux'

import styles from './current-word.module.scss'

const CurrentWord = () => {
  const currentWord = useSelector((state) => state.currentWord.currentWord)

  return (
    <div className={styles['current-word']}>{currentWord}</div>
  )
}

export default CurrentWord