import { forwardRef, RefObject } from 'react'
import { Card } from '../../models/Card'
import classes from './CardContent.module.scss'

interface CardContentProps {
  card: Card
  ref?: RefObject<HTMLAudioElement>
  isBackSide?: boolean
}

const CardContent = forwardRef<HTMLAudioElement, CardContentProps>(
  ({ card, isBackSide }, ref) => {
    const cardContentClass = [classes.cardContent]

    if (isBackSide) {
      cardContentClass.push(classes.cardContentBack)
    }

    return (
      <div className={cardContentClass.join(' ')}>
        <img
          className={classes.image}
          src={`images/${card.image}`}
          width="100%"
          height="200"
          alt={card.word}
        />
        {isBackSide ? (
          <h3 className={classes.title}>{card.translation}</h3>
        ) : (
          <h3 className={classes.title}>{card.word}</h3>
        )}
        <audio
          className={classes.audio}
          src={`audio/${card.audioSrc}`}
          ref={ref}
        />
      </div>
    )
  }
)

export default CardContent
