import { FC, useEffect, useRef, useState } from 'react'
import { useActions } from '../../hooks/useActions'
import { Card } from '../../models/Card'
import { Star } from '../../models/Star'
import CardImage from '../CardImage/CardImage'
import classes from './PlayCard.module.scss'

interface PlayCardProps {
  card: Card
  index: number
  cardToSelect: number | undefined
  randomCards?: number[]
  setRandomCards?: (arr: number[] | undefined) => void
  setStars: (star: Star) => void
  stars: Star
  setIsModalOpened: (bool: boolean) => void
}

const PlayCard: FC<PlayCardProps> = ({
  card,
  index,
  cardToSelect,
  randomCards,
  stars,
  setRandomCards,
  setStars,
  setIsModalOpened,
}) => {
  const { setIsPlayMode } = useActions()
  const [isGuessed, setIsGuessed] = useState<boolean>(false)
  const selectedCardRef = useRef<HTMLAudioElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  const isCorrectWord = cardToSelect === index
  const imageSrc = isGuessed ? 'v.png' : card.image
  const imageWidth = isGuessed ? 300 : '100%'
  const audioSrc = isCorrectWord ? 'correct' : 'error'
  const cardClass = [classes.card]

  if (isGuessed) {
    cardClass.push(classes.guessed)
  }

  const openModal = () => {
    const indexToRemove = randomCards ? randomCards?.length - 1 : 0
    const withoutLastIndex = randomCards?.filter((_, i) => i !== indexToRemove)
    if (setRandomCards) {
      setRandomCards(withoutLastIndex)
    }
    if (randomCards?.length === 1) {
      setIsModalOpened(true)
      setIsPlayMode()
    }
  }

  const onCorrectWordClick = () => {
    const newStars = { ...stars, correct: [...stars.correct, true] }
    setStars(newStars)
    setIsGuessed(true)

    setTimeout(openModal, 1000)
  }

  const onWrongWordClick = () => {
    const newStars = {
      correct: [...stars.correct, false],
      mistakes: stars.mistakes + 1,
    }
    setStars(newStars)
  }

  const onPlayCardClick = () => {
    if (isGuessed) {
      return
    }

    selectedCardRef.current?.play()

    if (isCorrectWord) {
      onCorrectWordClick()
    } else {
      onWrongWordClick()
    }
  }

  useEffect(() => {
    if (isCorrectWord) {
      setTimeout(() => {
        audioRef.current?.play()
      }, 500)
    }
  }, [randomCards])

  return (
    <div className={cardClass.join(' ')} onClick={onPlayCardClick}>
      <CardImage src={imageSrc} width={imageWidth} height={200} />
      <audio
        className={classes.audio}
        src={`audio/${card.audioSrc}`}
        ref={audioRef}
      />
      <audio src={`audio/${audioSrc}.mp3`} ref={selectedCardRef} />
    </div>
  )
}

export default PlayCard
