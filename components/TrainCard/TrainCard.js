import { useSelector } from 'react-redux'

import './train-card.scss'

const TrainCard = ({
  word,
  translation,
  image,
  audio,
  index,
  handlePlayAudio,
}) => {
  const isBack = useSelector((state) => state.trainCard.isBack)
  const isPlay = useSelector((state) => state.mode.isPlay)

  return (
    <>
      {!isPlay ? (
        <div className="train-card">
          <div
            className={
              isBack
                ? 'train-card__inner train-card__inner_flipped'
                : 'train-card__inner'
            }
          >
            <audio
              className="audio"
              src={`../../static/${audio}`}
              data-audio={index}
            />
            <div className="train-card train-card_front">
              <img
                className="train-card__image"
                src={`../../static/${image}`}
              />
              <div className="train-card__word">
                <span className="train-card__caption">{word}</span>
              </div>
            </div>
            <div className="train-card train-card_back">
              <img
                className="train-card__image"
                src={`../../static/${image}`}
                onClick={() => {
                  handlePlayAudio(index)
                }}
              />
              <div className="train-card__word">
                <span className="train-card__caption">{translation}</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="play-card">
          <img
            className="play-card__image"
            src={`../../static/${image}`}
            width="300"
            height="300"
          />
          <audio
            className="audio"
            src={`../../static/${audio}`}
            data-audio={index}
          />
        </div>
      )}
    </>
  )
}

export default TrainCard
