import { FC, ReactNode } from 'react'
import PreviewCardsItemProps from '../PreviewCardItem/PreviewCardsItem'
import { useFetchAllPreviewCardsQuery } from '../../services/PreviewCardsService'
import classes from './PreviewCardList.module.scss'
import Spinner from '../Spinner/Spinner'

const PreviewCardList: FC = () => {
  const {
    data: previewCards,
    error,
    isLoading,
  } = useFetchAllPreviewCardsQuery()

  return (
    <>
      {isLoading && <Spinner />}
      {error && <div>{error as ReactNode}</div>}
      <div className={classes.cardList}>
        {previewCards?.map((card) => (
          <PreviewCardsItemProps key={card.id} card={card} />
        ))}
      </div>
    </>
  )
}

export default PreviewCardList
