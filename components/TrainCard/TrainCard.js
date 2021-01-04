import { useSelector, useDispatch } from 'react-redux'

import { setWord } from './../../store/current-word/actions'

import styles from './train-card.module.scss'

const TrainCard = ({
  word,
  translation,
  image,
  audio,
  index,
  handlePlayAudio,
}) => {
  const isBack = useSelector((state) => state.trainCard.isBack)
  const isPlay = useSelector((state) => state.mode.isPlay)
  const dispatch = useDispatch()

  return (
    <>
      {!isPlay ? (
        <div className={styles['train-card']}>
          <div
            className={
              isBack
                ? `${styles['train-card__inner']} ${styles['train-card__inner_flipped']}`
                : styles['train-card__inner']
            }
          >
            <audio
              className={styles['audio']}
              src={`../../static/${audio}`}
              data-audio={index}
            />
            <div className={`${styles['train-card']} ${styles['train-card_front']}`}>
              <img
                className={styles['train-card__image']}
                src={`../../static/${image}`}
              />
              <div className={styles['train-card__word']}>
                <span className={styles['train-card__caption']}>{word}</span>
              </div>
            </div>
            <div className={`${styles['train-card']} ${styles['train-card_back']}`}>
              <img
                className={styles['train-card__image']}
                src={`../../static/${image}`}
                onClick={() => {
                  handlePlayAudio(index)
                }}
              />
              <div className={styles['train-card__word']}>
                <span className={styles['train-card__caption']}>{translation}</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
          <div className={styles['play-card']}>
            <img
              className={styles['play-card__image']}
              src={`../../static/${image}`}
              width="300"
              height="300"
              onClick={() => {
                handlePlayAudio(index)
                dispatch(setWord(word))
              }}
            />
            <audio
              className={styles['audio']}
              src={`../../static/${audio}`}
              data-audio={index}
            />
          </div>
        )}
    </>
  )
}

export default TrainCard
