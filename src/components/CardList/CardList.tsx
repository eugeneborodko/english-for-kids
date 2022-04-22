import { FC, ReactNode, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext, ContextProps } from '../../context'
import { getRandomNumber } from '../../helpers/getRandomNumber'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useFetchCardsQuery } from '../../services/CardsService'
import CardItem from '../CardItem/CardItem'
import Spinner from '../Spinner/Spinner'
import classes from './CardList.module.scss'

type CardsPageParams = {
  id: string
}

const CardList: FC = () => {
  const { isPlayMode } = useTypedSelector((state) => state.gameMode)
  const { currentCategory } = useContext(AppContext) as ContextProps
  const [cardsOrder, setCardsOrder] = useState<number[]>([])
  const { id } = useParams<CardsPageParams>()
  const { data: cards, error, isLoading } = useFetchCardsQuery(currentCategory || id)

  const randomizeCards = () => {
    if (isPlayMode) {
      const cardsLength = cards?.length || 8

      if (!!cardsLength) {
        const cardsIndexes: number[] = []

        while (cardsIndexes.length < cardsLength) {
          const randomNumber = getRandomNumber(0, cardsLength)

          if (!cardsIndexes.includes(randomNumber)) {
            cardsIndexes.push(randomNumber)
          }
        }
        setCardsOrder([...cardsIndexes])
      }
    }
  }

  useEffect(() => {
    randomizeCards()
  }, [isPlayMode])

  return (
    <>
      {isLoading && <Spinner />}
      {error && <div>{error as ReactNode}</div>}
      <div className={classes.cardList}>
        {!!cardsOrder.length ? (
          <>
            {cards?.map((card, i) => {
              const index = cardsOrder[i]

              return <CardItem key={card.word} card={cards[index]} />
            })}
          </>
        ) : (
          <>
            {cards?.map((card) => (
              <CardItem key={card.word} card={card} />
            ))}
          </>
        )}
      </div>
    </>
  )
}

export default CardList
