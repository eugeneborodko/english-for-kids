import {
  FC,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { useParams } from 'react-router-dom'
import { AppContext, ContextProps } from '../../context'
import { getRandomNumber } from '../../helpers/getRandomNumber'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useFetchCardsQuery } from '../../services/CardsService'
import PlayCard from '../PlayCard/PlayCard'
import Spinner from '../Spinner/Spinner'
import TrainCard from '../TrainCard/TrainCard'
import { Star } from '../../models/Star'
import classes from './CardList.module.scss'
import Modal from '../Modal/Modal'

type CardsPageParams = {
  id: string
}

const CardList: FC = () => {
  const { isPlayMode } = useTypedSelector((state) => state.gameMode)
  const { currentCategory } = useContext(AppContext) as ContextProps
  const [cardsOrder, setCardsOrder] = useState<number[]>([])
  const [randomCards, setRandomCards] = useState<number[] | undefined>([])
  const [streak, setStreak] = useState<number>(0)
  const [stars, setStars] = useState<Star>({ correct: [], mistakes: 0 })
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false)
  const gameResultRef = useRef<HTMLAudioElement>(null)
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

  useEffect(() => {
    if (isModalOpened) {
      gameResultRef.current?.play()
    }
  }, [streak])

  return (
    <>
      {isLoading && <Spinner />}
      {error && <div>{error as ReactNode}</div>}
      {isPlayMode && (
        <>
          {stars.correct.map((star) => {
            const src = star ? 'star-win' : 'star'
            return <img src={`images/${src}.svg`} alt="star" />
          })}
        </>
      )}

      <div className={classes.cardList}>
        {cards?.map((card, i) => {
          const index = cardsOrder[i]
          const cardToSelect = randomCards ? randomCards.length - 1 : 0

          return isPlayMode ? (
            <PlayCard
              card={cards[index]}
              index={i}
              cardToSelect={randomCards?.[cardToSelect]}
              randomCards={randomCards}
              setRandomCards={setRandomCards}
              setStreak={setStreak}
              stars={stars}
              setStars={setStars}
              setIsModalOpened={setIsModalOpened}
            />
          ) : (
            <TrainCard card={card} />
          )
        })}
      </div>
      {isModalOpened && streak === cardsOrder.length ? (
        <audio src="audio/success.mp3" ref={gameResultRef} />
      ) : (
        <audio src="audio/failure.mp3" ref={gameResultRef} />
      )}
      <Modal
        isOpen={isModalOpened}
        setIsOpen={setIsModalOpened}
        setStars={setStars}
        setStreak={setStreak}
      >
        {cardsOrder && (
          <>
            {streak === cardsOrder.length ? (
              <div className={classes.modalContent}>
                <h2 className={classes.modalTitle}>Congratulations!</h2>
                <img src="images/success.jpg" alt="success" />
              </div>
            ) : (
              <div className={classes.modalContent}>
                <h2 className={classes.modalTitle}>
                  You made {stars.mistakes} mistakes. Please, try again.
                </h2>
                <img src="images/failure.jpg" alt="failure" />
              </div>
            )}
          </>
        )}
      </Modal>
    </>
  )
}

export default CardList
