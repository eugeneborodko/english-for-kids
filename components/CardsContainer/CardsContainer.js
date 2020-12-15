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

  const categories = data.map((item, index) => item[index])

  return (
    <div className="cards-container">
      {categories.map((category, index) => {
        return <Card caption={captions[index]} image={category.image} key={index} />
      })}
    </div>
  )
}

export default CardsContainer
