import TrainCard from './../TrainCard/TrainCard'

import './train-cards-container.scss'

const TrainCardsContainer = ({ data }) => {
  return (
    <>
      <div className="container container_big">
        <div className="train-cards-container">
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
