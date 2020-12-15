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

  const arr = data.map((item, index) => item[index])

  return (
    <div className="cards-container">
      {arr.map((item, index) => {
        return <Card caption={captions[index]} image={item.image} key={index} />
      })}
    </div>
  )
}

export default CardsContainer
