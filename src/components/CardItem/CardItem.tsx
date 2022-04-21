import { FC, useRef, useState } from 'react'
import { Card } from '../../models/Card'
import CardContent from '../CardContent/CardContent'
import classes from './CardItem.module.scss'

interface CardItemProps {
  card: Card
}

const CardItem: FC<CardItemProps> = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const innerClass = [classes.inner]

  if (isFlipped) {
    innerClass.push(classes.innerFlipped)
  }

  const onSelectCard = () => {
    audioRef.current?.play()
    setIsFlipped(true)
  }

  const onCardLeave = () => {
    if (isFlipped) {
      setIsFlipped(false)
    }
  }

  return (
    <div
      className={classes.card}
      onClick={onSelectCard}
      onMouseLeave={onCardLeave}
    >
      <div className={innerClass.join(' ')}>
        <CardContent card={card} ref={audioRef} />
        <CardContent card={card} isBackSide />
      </div>
    </div>
  )
}

export default CardItem
