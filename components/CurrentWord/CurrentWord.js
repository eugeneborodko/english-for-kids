import { useSelector } from 'react-redux'

import './current-word.scss'

const CurrentWord = () => {
  const currentWord = useSelector((state) => state.currentWord.currentWord)

  return (
    <div className="current-word">{currentWord}</div>
  )
}

export default CurrentWord