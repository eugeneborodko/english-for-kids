import { FC, ReactNode } from 'react'
import { useFetchCardsQuery } from '../../services/CardsService'
import CardItem from '../CardItem/CardItem'
import Spinner from '../Spinner/Spinner'
import classes from './CardList.module.scss'

const CardList: FC = () => {
  const { data: cards, error, isLoading } = useFetchCardsQuery('clothes')

  return (
    <>
      {isLoading && <Spinner />}
      {error && <div>{error as ReactNode}</div>}
      <div className={classes.cardList}>
        {cards?.map((card) => (
          <CardItem key={card.word} card={card} />
        ))}
      </div>
    </>
  )
}

export default CardList
