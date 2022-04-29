import { forwardRef, useEffect, useRef, useState } from 'react'
import { Card } from '../../models/Card'
import classes from './PlayCard.module.scss'

interface PlayCardProps {
  card: Card
  index: number | undefined
  cardToSelect: number | undefined
}

const PlayCard = forwardRef<HTMLAudioElement, PlayCardProps>(
  ({ card, index, cardToSelect }, ref) => {
    const correctCardRef = useRef<HTMLAudioElement>(null)
    const errorCardRef = useRef<HTMLAudioElement>(null)

    const onPlayCardClick = () => {
      if (cardToSelect === index) {
        correctCardRef.current?.play()
      } else {
        errorCardRef.current?.play()
      }
    }

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
          ref={ref}
        />
        <audio src="audio/correct.mp3" ref={correctCardRef} />
        <audio src="audio/error.mp3" ref={errorCardRef} />
      </div>
    )
  }
)

export default PlayCard