import { FC } from 'react'
import { useParams } from 'react-router-dom'
import CardList from '../../components/CardList/CardList'

type CardsPageParams = {
  id: string
}

const CardsPage: FC = () => {
  const {id} = useParams<CardsPageParams>()

  return (
    <CardList />
  )
}

export default CardsPage