import { useSelector } from 'react-redux'

import './card.scss'

const Card = ({ image, caption }) => {
  const isPlay = useSelector(state => state.mode.isPlay)

  return (
    <a className="card" href="#">
      <img className="card__image" src={`../static/${image}`} />
      <span className={isPlay ? 'card__bg card__bg_orange' : 'card__bg card__bg_green'}></span>
      <span className="card__caption">{caption}</span>
    </a>
  )
}

export default Card
