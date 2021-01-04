import { useSelector } from 'react-redux'
import Link from 'next/link'

import styles from './card.module.scss'

const Card = ({ image, caption }) => {
  const isPlay = useSelector((state) => state.mode.isPlay)
  const url = caption
    .replace(/[{()}]/g, '')
    .replace(/ /g, '-')
    .toLowerCase()

  return (
    <>
      <Link href={'/category/[categoryName]'} as={`/category/${url}`}>
        <a className={styles['card']}>
          <img className={styles['card__image']} src={`../static/${image}`} />
          <span
            className={
              isPlay
                ? `${styles['card__bg']} ${styles['card__bg_orange']}`
                : `${styles['card__bg']} ${styles['card__bg_green']}`
            }
          ></span>
          <span className={styles['card__caption']}>{caption}</span>
        </a>
      </Link>
    </>
  )
}

export default Card
