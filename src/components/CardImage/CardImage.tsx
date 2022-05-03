import { FC } from 'react'
import classes from './CardImage.module.scss'

interface CardImageProps {
  src: string
  width: string | number
  height: string | number
}

const CardImage: FC<CardImageProps> = ({ src, width, height }) => {
  return (
    <img
      className={classes.image}
      src={`images/${src}`}
      width={width}
      height={height}
      alt={src}
    />
  )
}

export default CardImage
