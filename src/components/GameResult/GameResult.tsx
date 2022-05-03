import { FC } from 'react'
import classes from './GameResult.module.scss'

interface GameResultProps {
  title: string
  src: string
}

const GameResult: FC<GameResultProps> = ({title, src}) => {
  return (
    <div className={classes.gameResult}>
      <h2 className={classes.title}>{title}</h2>
      <img src={`images/${src}.jpg`} alt={src} />
    </div>
  )
}

export default GameResult
