import { FC, ReactNode, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext, ContextProps } from '../../context'
import { useFetchCardsQuery } from '../../services/CardsService'
import CardItem from '../CardItem/CardItem'
import Spinner from '../Spinner/Spinner'
import classes from './CardList.module.scss'

type CardsPageParams = {
  id: string
}

const CardList: FC = () => {
  const {currentCategory} = useContext(AppContext) as ContextProps
  const {id} = useParams<CardsPageParams>()
  const { data: cards, error, isLoading } = useFetchCardsQuery(currentCategory || id)

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
