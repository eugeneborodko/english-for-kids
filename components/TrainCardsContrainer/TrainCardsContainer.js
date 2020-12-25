import { useSelector } from 'react-redux'

import TrainCard from './../TrainCard/TrainCard'
import CurrentWord from './../CurrentWord/CurrentWord'

import './train-cards-container.scss'

const TrainCardsContainer = ({ data }) => {
  const isPlay = useSelector((state) => state.mode.isPlay)

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
        {isPlay &&
          <CurrentWord />
        }
      </div>
    </>
  )
}

export default TrainCardsContainer
