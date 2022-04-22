import { FC, useContext } from 'react'
import { PreviewCard } from '../../models/PreviewCard'
import { Link } from 'react-router-dom'
import { AppContext, ContextProps } from '../../context'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import classes from './PreviewCardsItem.module.scss'

interface PreviewCardsItemProps {
  card: PreviewCard
}

const PreviewCardsItem: FC<PreviewCardsItemProps> = ({ card }) => {
  const {isPlayMode} = useTypedSelector((state) => state.gameMode)
  const { setCurrentCategory } = useContext(AppContext) as ContextProps

  const cardClass = [classes.card]

  if (isPlayMode) {
    cardClass.push(classes.cardPlayMode)
  }

  const onSelectCategory = (link: string) => {
    return () => {
      setCurrentCategory(link)
    }
  }

  return (
    <Link
      className={cardClass.join(' ')}
      to={`/${card.link}`}
      onClick={onSelectCategory(card.link)}
    >
      <img
        className={classes.image}
        src={`images/${card.image}`}
        width="160"
        height="160"
        alt={card.title}
      />
      <h3 className={classes.title}>{card.title}</h3>
    </Link>
  )
}

export default PreviewCardsItem
