import { FC } from 'react'
import { PreviewCard } from '../../models/PreviewCard'
import { Link } from 'react-router-dom'
import classes from './PreviewCardsItem.module.scss'

interface PreviewCardsItemProps {
  card: PreviewCard
}

const PreviewCardsItem: FC<PreviewCardsItemProps> = ({ card }) => {
  return (
    <Link className={classes.card} to={`/${card.link}`}>
      <img className={classes.image} src={`images/${card.image}`} width="160" height="160" alt={card.title} />
      <h3 className={classes.title}>{card.title}</h3>
    </Link>
  )
}

export default PreviewCardsItem
