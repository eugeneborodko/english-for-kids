import { useSelector, useDispatch } from 'react-redux'

import TrainCard from './../TrainCard/TrainCard'

import './train-cards-container.scss'

const TrainCardsContainer = ({ data }) => {
  const isPlay = useSelector((state) => state.mode.isPlay)
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
      </div>
    </>
  )
}

export default TrainCardsContainer
