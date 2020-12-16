import { useSelector, useDispatch } from 'react-redux'

import { rotateFlipCard } from './../../store/flip-card/actions'

import './flip-card.scss'

const FlipCard = () => {
  const isBack = useSelector(state => state.flipCard.isBack)
  const dispatch = useDispatch()

  return (
    <div className="scene">
      <div
        className={isBack ? 'flip-card flip-card_flipped' : 'flip-card'}
        onClick={() => {
          dispatch(rotateFlipCard())
        }}
      >
        <div className="flip-card__item flip-card__item_front">front</div>
        <div className="flip-card__item flip-card__item_back">back</div>
      </div>
    </div>
  )
}

export default FlipCard