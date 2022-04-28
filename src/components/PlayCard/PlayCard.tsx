import { forwardRef } from 'react'
import { Card } from '../../models/Card'
import classes from './PlayCard.module.scss'

interface PlayCardProps {
  card: Card
}

const PlayCard = forwardRef<HTMLAudioElement, PlayCardProps>(
  ({ card }, ref) => {

    return (
      <div className={classes.card}>
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
      </div>
    )
  }
)

export default PlayCard
