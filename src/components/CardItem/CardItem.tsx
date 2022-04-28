import { FC, useEffect, useRef } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { Card } from '../../models/Card'
import PlayCard from '../PlayCard/PlayCard'
import TrainCard from '../TrainCard/TrainCard'

interface CardItemProps {
  card: Card
  randomCards?: number[]
  index?: number
}

const CardItem: FC<CardItemProps> = ({ card, randomCards, index }) => {
  const { isPlayMode } = useTypedSelector((state) => state.gameMode)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (isPlayMode && randomCards?.length) {
      if (index === randomCards[0]) {
        audioRef.current?.play()
      }
    }
  }, [randomCards])

  return (
    <>
      {isPlayMode ? (
        <PlayCard card={card} ref={audioRef} />
      ) : (
        <TrainCard card={card} ref={audioRef} />
      )}
    </>
  )
}

export default CardItem
