import { useSelector } from 'react-redux'
import Link from 'next/link'

import './card.scss'

const Card = ({ image, caption }) => {
  const isPlay = useSelector((state) => state.mode.isPlay)
  const url = caption
    .replace(/[{()}]/g, '')
    .replace(/ /g, '-')
    .toLowerCase()

  return (
    <>
      <Link href={'/category/[categoryName]'} as={`/category/${url}`}>
        <a className="card">
          <img className="card__image" src={`../static/${image}`} />
          <span
            className={
              isPlay ? 'card__bg card__bg_orange' : 'card__bg card__bg_green'
            }
          ></span>
          <span className="card__caption">{caption}</span>
        </a>
      </Link>
    </>
  )
}

export default Card
