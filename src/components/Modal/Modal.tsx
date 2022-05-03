import { FC, MouseEvent, ReactNode, useEffect } from 'react'
import { Star } from '../../models/Star'
import classes from './Modal.module.scss'

interface ModalProps {
  isOpen: boolean
  setIsOpen: (bool: boolean) => void
  children: ReactNode
  setStars: (star: Star) => void
  setStreak: (streak: number) => void
}

const Modal: FC<ModalProps> = ({isOpen, setIsOpen, setStars, setStreak, children}) => {
  const modalClass = [classes.modal]

  if (isOpen) {
    modalClass.push(classes.active)
  }

  const onModalClose = () => {
    setIsOpen(false)
    setStars({ correct: [], mistakes: 0 })
    setStreak(0)
  }

  const onModalContentClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  return (
    <div className={modalClass.join(' ')} onClick={onModalClose}>
      <div className={classes.content} onClick={onModalContentClick}>
        {children}
      </div>
    </div>
  )
}

export default Modal