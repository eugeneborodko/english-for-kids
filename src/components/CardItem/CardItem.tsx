import { FC } from 'react'
import { Card } from '../../models/Card'
import classes from './CardItem.module.scss'

interface CardItemProps {
  card: Card
}

const CardItem: FC<CardItemProps> = ({ card }) => {
  return (
    <div className={classes.card}>
      <img
        className={classes.image}
        src={`images/${card.image}`}
        width="100%"
        height="100%"
        alt={card.word}
      />
      <h3 className={classes.title}>{card.word}</h3>
    </div>
  )
}

export default CardItem
