import { FC } from 'react'
import { APP_ROUTE } from '../../constants/internalLinks'
import { PreviewCard } from '../../models/PreviewCard'
import classes from './PreviewCardsItem.module.scss'

interface PreviewCardsItemProps {
  card: PreviewCard
}

const PreviewCardsItem: FC<PreviewCardsItemProps> = ({ card }) => {
  return (
    <a className={classes.card} href={`${APP_ROUTE}/${card.link}`}>
      <img className={classes.image} src={`images/${card.image}`} width="160" height="160" alt={card.title} />
      <h3 className={classes.title}>{card.title}</h3>
    </a>
  )
}

export default PreviewCardsItem
