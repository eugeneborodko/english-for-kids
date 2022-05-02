import { FC, useEffect, useRef, useState } from 'react'
import { useActions } from '../../hooks/useActions'
import { Card } from '../../models/Card'
import { Star } from '../../models/Star'
import classes from './PlayCard.module.scss'

interface PlayCardProps {
  card: Card
  index: number
  cardToSelect: number | undefined
  randomCards?: number[]
  setRandomCards?: (arr: number[] | undefined) => void
  setStreak?: (num: number | ((num: number) => number)) => void
  setStars: (star: Star) => void
  stars: Star
  setIsModalOpened: (bool: boolean) => void
}

const PlayCard: FC<PlayCardProps> = ({
  card,
  index,
  cardToSelect,
  randomCards,
  setRandomCards,
  setStreak,
  setStars,
  stars,
  setIsModalOpened
}) => {
  const { setIsPlayMode } = useActions()
  const [isGuessed, setIsGuessed] = useState<boolean>(false)
  const selectedCardRef = useRef<HTMLAudioElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  const isCorrectWord = cardToSelect === index
  const cardClass = [classes.card]

  if (isGuessed) {
    cardClass.push(classes.guessed)
  }

  const onPlayCardClick = () => {
    if (isGuessed) {
      return 
    }
    
    selectedCardRef.current?.play()
      if (isCorrectWord) {
       
        setIsGuessed(true)
        setStars({...stars, correct: [...stars.correct, true]})
        setTimeout(() => {
          const indexToRemove = randomCards ? randomCards?.length - 1 : 0
          const withoutLastIndex = randomCards?.filter(
            (_, i) => i !== indexToRemove
          )
          if (setRandomCards) {
            setRandomCards(withoutLastIndex)
          }
          if (setStreak) {
            setStreak((prev: number) => prev + 1)
          }
          if (randomCards?.length === 1) {
            setIsModalOpened(true)
            setIsPlayMode()
          }
        }, 1000)
        
      } else {
        if (setStreak) {
          setStreak(0)
        }
        setStars({...stars, correct: [...stars.correct, false], mistakes: stars.mistakes + 1})
      }
  }

  useEffect(() => {
    if (isCorrectWord) {
      setTimeout(() => {
        audioRef.current?.play()
      }, 500)
    }
  }, [randomCards])

  return (
    <div className={cardClass.join(' ')} onClick={onPlayCardClick}>
      {isGuessed ? (
        <img className={classes.image} src={`images/v.png`} width="300" height="200" alt={card.word} />
      ) : (
        <img
          src={`images/${card.image}`}
          width="100%"
          height="200"
          alt={card.word}
        />
      )}

      <audio
        className={classes.audio}
        src={`audio/${card.audioSrc}`}
        ref={audioRef}
      />
      {isCorrectWord ? (
        <audio src="audio/correct.mp3" ref={selectedCardRef} />
      ) : (
        <audio src="audio/error.mp3" ref={selectedCardRef} />
      )}
    </div>
  )
}

export default PlayCard
