import { useSelector, useDispatch } from 'react-redux'

import { rotateTrainCard } from './../../store/train-card/actions'

import './train-card.scss'

const TrainCard = ({ word, translation, image }) => {
  const isBack = useSelector((state) => state.trainCard.isBack)
  const isPlay = useSelector((state) => state.mode.isPlay)
  const dispatch = useDispatch()

  return (
    <>
      {!isPlay && (
        <div className="scene">
          <div
            className={isBack ? 'train-card train-card_flipped' : 'train-card'}
          >
            <div className="train-card__item train-card__item_front">
              <img
                className="train-card__image"
                src={`../../static/${image}`}
              />
              <span className="train-card__caption">{word}</span>
              <div
                className="train-card__rotate"
                onClick={() => {
                  dispatch(rotateTrainCard())
                }}
              />
            </div>
            <div className="train-card__item train-card__item_back">
              <img
                className="train-card__image"
                src={`../../static/${image}`}
              />
              <span className="train-card__caption">{translation}</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default TrainCard
