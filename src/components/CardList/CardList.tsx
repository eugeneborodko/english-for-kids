import { FC, ReactNode, useContext, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext, ContextProps } from '../../context'
import { getRandomNumber } from '../../helpers/getRandomNumber'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useFetchCardsQuery } from '../../services/CardsService'
import PlayCard from '../PlayCard/PlayCard'
import Spinner from '../Spinner/Spinner'
import TrainCard from '../TrainCard/TrainCard'
import classes from './CardList.module.scss'

type CardsPageParams = {
  id: string
}

const CardList: FC = () => {
  const { isPlayMode } = useTypedSelector((state) => state.gameMode)
  const { currentCategory } = useContext(AppContext) as ContextProps
  const [cardsOrder, setCardsOrder] = useState<number[]>([])
  const [randomCards, setRandomCards] = useState<number[]>([])
  const { id } = useParams<CardsPageParams>()
  const {
    data: cards,
    error,
    isLoading,
  } = useFetchCardsQuery(currentCategory || id)

  useMemo(() => {
    const cardsLength = cards?.length || 8

    if (!!cardsLength) {
      const cardsIndexes: number[] = []

      while (cardsIndexes.length < cardsLength) {
        const randomNumber = getRandomNumber(0, cardsLength)

        if (!cardsIndexes.includes(randomNumber)) {
          cardsIndexes.push(randomNumber)
        }
      }

      setCardsOrder(cardsIndexes)
      setRandomCards(cardsIndexes)
    }
  }, [isPlayMode])

  return (
    <>
      {isLoading && <Spinner />}
      {error && <div>{error as ReactNode}</div>}
      <div className={classes.cardList}>
        {cards?.map((card, i) => {
          const index = cardsOrder[i]

          return isPlayMode ? (
            <PlayCard
              card={cards[index]}
              index={i}
              cardToSelect={randomCards?.[0]}
              randomCards={randomCards}
            />
          ) : (
            <TrainCard card={card} />
          )
        })}
      </div>
    </>
  )
}

export default CardList
