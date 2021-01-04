import { useSelector } from 'react-redux'

import TrainCard from './../TrainCard/TrainCard'
import CurrentWord from './../CurrentWord/CurrentWord'

import styles from './train-cards-container.module.scss'

const TrainCardsContainer = ({ data }) => {
  const isPlay = useSelector((state) => state.mode.isPlay)

  const handlePlayAudio = (index) => {
    const audio = document.querySelector(
      `.train-card_audio__QJJSw[data-audio="${index}"]`,
    )
    audio.play()
  }

  return (
    <>
      <div className="container">
        <div className={styles['train-cards__container']}>
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
        {isPlay && <CurrentWord />}
      </div>
    </>
  )
}

export default TrainCardsContainer
