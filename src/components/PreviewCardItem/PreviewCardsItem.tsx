import { FC, useContext } from 'react'
import { PreviewCard } from '../../models/PreviewCard'
import { Link } from 'react-router-dom'
import classes from './PreviewCardsItem.module.scss'
import { AppContext, ContextProps } from '../../context'

interface PreviewCardsItemProps {
  card: PreviewCard
}

const PreviewCardsItem: FC<PreviewCardsItemProps> = ({ card }) => {
  const {setCurrentCategory} = useContext(AppContext) as ContextProps

  const onSelectCategory = (link: string) => {
    return () => {
      setCurrentCategory(link)
    }
  }

  return (
    <Link className={classes.card} to={`/${card.link}`} onClick={onSelectCategory(card.link)}>
      <img className={classes.image} src={`images/${card.image}`} width="160" height="160" alt={card.title} />
      <h3 className={classes.title}>{card.title}</h3>
    </Link>
  )
}

export default PreviewCardsItem
