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
import StarList from '../StarList/StarList'
import Container from '../Container/Container'
import GameResult from '../GameResult/GameResult'

type CardsPageParams = {
  id: string
}

const CardList: FC = () => {
  const { isPlayMode } = useTypedSelector((state) => state.gameMode)
  const { currentCategory } = useContext(AppContext) as ContextProps
  const [cardsOrder, setCardsOrder] = useState<number[]>([])
  const [randomCards, setRandomCards] = useState<number[] | undefined>([])
  const [stars, setStars] = useState<Star>({ correct: [], mistakes: 0 })
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false)
  const gameResultRef = useRef<HTMLAudioElement>(null)
  const { id } = useParams<CardsPageParams>()
  const gameResultAudioSrc = `audio/${
    !stars.mistakes ? 'success' : 'failure'
  }.mp3`

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
  }, [isModalOpened])

  useEffect(() => {
    if (isPlayMode) setStars({ correct: [], mistakes: 0 })
  }, [isPlayMode])

  return (
    <Container>
      {isLoading && <Spinner />}
      {error && <div>{error as ReactNode}</div>}
      {isPlayMode && <StarList stars={stars} />}
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
              stars={stars}
              setStars={setStars}
              setIsModalOpened={setIsModalOpened}
            />
          ) : (
            <TrainCard card={card} />
          )
        })}
      </div>
      <audio src={gameResultAudioSrc} ref={gameResultRef} />
      <Modal
        isOpen={isModalOpened}
        setIsOpen={setIsModalOpened}
        setStars={setStars}
      >
        {isModalOpened && (
          <>
            {!!stars.mistakes ? (
              <GameResult
                title={`You made ${stars.mistakes} mistakes. Please, try again.`}
                src="failure"
              />
            ) : (
              <GameResult title="Congratulations" src="success" />
            )}
          </>
        )}
      </Modal>
    </Container>
  )
}

export default CardList
