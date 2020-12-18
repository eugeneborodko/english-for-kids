import { useSelector } from 'react-redux'

import './train-card.scss'

const TrainCard = ({ word, translation, image, audio, index }) => {
  const isBack = useSelector((state) => state.trainCard.isBack)
  const isPlay = useSelector((state) => state.mode.isPlay)

  const handlePlayAudio = () => {
    const audio = document.querySelector(`.train-card__audio[data-audio="${index}"]`)
    audio.play()
  }

  return (
    <>
      {!isPlay && (
        <div className="train-card">
          <div className={isBack ? 'train-card__inner train-card__inner_flipped' : 'train-card__inner'}>
            <audio className="train-card__audio" src={`../../static/${audio}`} data-audio={index} />
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
                onClick={() => { handlePlayAudio() }}
              />
              <div className="train-card__word">
                <span className="train-card__caption">{translation}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default TrainCard
