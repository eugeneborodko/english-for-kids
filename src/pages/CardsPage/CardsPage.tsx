import { FC } from 'react'
import { useParams } from 'react-router-dom'

type CardsPageParams = {
  id: string
}

const CardsPage: FC = () => {
  const {id} = useParams<CardsPageParams>()

  return (
    <div>Category {id}</div>
  )
}

export default CardsPage