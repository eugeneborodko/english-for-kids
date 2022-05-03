import { FC } from 'react'
import { Star } from '../../models/Star'
import classes from './StarList.module.scss'

interface StarListProps {
  stars: Star
}

const StarList: FC<StarListProps> = ({ stars }) => {
  return (
    <div className={classes.starList}>
      {stars.correct.map((star) => {
        const src = star ? 'star-win' : 'star'

        return <img src={`images/${src}.svg`} width="64" height="64" alt={src} />
      })}
    </div>
  )
}

export default StarList
