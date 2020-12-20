import { useSelector } from 'react-redux'

import TrainCard from './../TrainCard/TrainCard'

import './train-cards-container.scss'

const TrainCardsContainer = ({ data }) => {
  const isPlay = useSelector((state) => state.mode.isPlay)
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
      </div>
    </>
  )
}

export default TrainCardsContainer
