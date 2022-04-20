import { FC, ReactNode } from 'react'
import Container from '../Container/Container'
import PreviewCardsItemProps from '../PreviewCardItem/PreviewCardsItem'
import { useFetchAllPreviewCardsQuery } from '../../services/PreviewCardsService'
import classes from './PreviewCardList.module.scss'

const PreviewCardList: FC = () => {
  const { data: previewCards, error, isLoading } = useFetchAllPreviewCardsQuery()

  return (
    <Container>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error as ReactNode}</div>}
      <div className={classes.cardList}>
      {previewCards?.map((card) => (
        <PreviewCardsItemProps key={card.id} card={card} />
      ))}
      </div>
      
    </Container>
  )
}

export default PreviewCardList