import { FC, useEffect, useRef } from 'react'
import { Card } from '../../models/Card'
import classes from './PlayCard.module.scss'

interface PlayCardProps {
  card: Card
  index: number
  cardToSelect: number
  randomCards?: number[]
}

const PlayCard: FC<PlayCardProps> = ({
  card,
  index,
  cardToSelect,
  randomCards
}) => {
  const selectedCardRef = useRef<HTMLAudioElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  const isCorrectWord = cardToSelect === index

  const onPlayCardClick = () => {
    selectedCardRef.current?.play()
  }

  useEffect(() => {
    if (isCorrectWord) {
      audioRef.current?.play()
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
