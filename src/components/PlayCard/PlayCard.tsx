import { FC, useEffect, useRef } from 'react'
import { Card } from '../../models/Card'
import classes from './PlayCard.module.scss'

interface PlayCardProps {
  card: Card
  index: number
  cardToSelect: number | undefined
  randomCards?: number[]
  setRandomCards?: (arr: number[] | undefined) => void
  setStreak?: (num: number | ((num: number) => number)) => void
}

const PlayCard: FC<PlayCardProps> = ({
  card,
  index,
  cardToSelect,
  randomCards,
  setRandomCards,
  setStreak,
}) => {
  const selectedCardRef = useRef<HTMLAudioElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  const isCorrectWord = cardToSelect === index

  const onPlayCardClick = () => {
    selectedCardRef.current?.play()
    setTimeout(() => {
      if (isCorrectWord) {
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
      } else {
        if (setStreak) {
          setStreak(0)
        }
      } 
    }, 1000)
    
  }

  useEffect(() => {
    if (isCorrectWord) {
      setTimeout(() => {
        audioRef.current?.play()
      }, 500)
    }
  }, [randomCards])

  return (
    <div className={classes.card} onClick={onPlayCardClick}>
      <img
        src={`images/${card.image}`}
        width="100%"
        height="200"
        alt={card.word}
      />
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
