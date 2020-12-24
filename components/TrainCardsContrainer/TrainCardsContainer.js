import { useSelector, useDispatch } from 'react-redux'

import { startGame } from './../../store/start-btn/actions'

import TrainCard from './../TrainCard/TrainCard'

import './train-cards-container.scss'

const TrainCardsContainer = ({ data }) => {
  const isPlay = useSelector((state) => state.mode.isPlay)
  const isStarted = useSelector((state) => state.startBtn.isStarted)
  const dispatch = useDispatch()
  let randomData

  const handleShuffleData = (data) => {
    const sliced = data.slice()

    for (let i = sliced.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      let temp = sliced[j]
      sliced[j] = sliced[i]
      sliced[i] = temp
    }

    randomData = isPlay ? sliced.slice() : data.slice()
  }

  handleShuffleData(data)

  data = randomData.slice()

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
              />
            )
          })}
        </div>
        {isPlay && (
          <button
            className="btn"
            onClick={() => {
              dispatch(startGame())
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
