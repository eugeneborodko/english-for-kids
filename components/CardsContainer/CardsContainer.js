import Card from './../Card/Card'

import './cards-container.scss'

const CardsContainer = ({ data }) => {
  const captions = [
    'Action (set A)',
    'Action (set B)',
    'Animal (set A)',
    'Animal (set B)',
    'Clothes',
    'Emotions',
  ]

  const cardContent = []

  for (let key in data) {
    cardContent.push(data[key])
  }

  return (
    <div className="cards-container">
      {
        cardContent.map((card, index) => {
          return (
            <Card caption={captions[index]} image={card[0].image} key={index} />
          )
        })
      }
    </div>
  )
}

export default CardsContainer
