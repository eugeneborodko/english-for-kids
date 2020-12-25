import { useSelector, useDispatch } from 'react-redux'

import { startGame } from './../../store/start-btn/actions'

import TrainCard from './../TrainCard/TrainCard'

import './train-cards-container.scss'

const TrainCardsContainer = ({ data }) => {
  const isPlay = useSelector((state) => state.mode.isPlay)
  const isStarted = useSelector((state) => state.startBtn.isStarted)
  const dispatch = useDispatch()

  const handleShuffleData = (cardData) => {
    for (let i = cardData.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      let temp = cardData[j]
      cardData[j] = cardData[i]
      cardData[i] = temp
    }
  }

  const handlePlayAudio = (index) => {
    const audio = document.querySelector(`.audio[data-audio="${index}"]`)
    audio.play()
  }

  return (
    <>
      <div className="container">
        <div className="train-cards__container">
          {data.map((item, index) => {
            return (
              <TrainCard
                word={item.word}
                translation={item.translation}
                image={item.image}
                audio={item.audioSrc}
                key={index}
                index={index}
                handlePlayAudio={handlePlayAudio}
              />
            )
          })}
        </div>
        {isPlay && (
          <button
            className="btn"
            onClick={() => {
              dispatch(startGame())
              handleShuffleData(data)
            }}
          >
            <span
              className={isStarted ? 'btn__text btn__text_hidden' : 'btn__text'}
            >
              start game
            </span>
            <img
              className={isStarted ? 'btn__img' : 'btn__img btn__img_hidden'}
              src="/static/img/repeat.svg"
              alt="repeat"
              width="40"
              height="25"
            />
          </button>
        )}
      </div>
    </>
  )
}

export default TrainCardsContainer
