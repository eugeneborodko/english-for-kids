import { FC, MouseEvent, ReactNode } from 'react'
import { Star } from '../../models/Star'
import classes from './Modal.module.scss'

interface ModalProps {
  isOpen: boolean
  setIsOpen: (bool: boolean) => void
  setStars: (star: Star) => void
  children: ReactNode
}

const Modal: FC<ModalProps> = ({isOpen, setIsOpen, setStars, children}) => {
  const modalClass = [classes.modal]

  if (isOpen) {
    modalClass.push(classes.active)
  }

  const onModalClose = () => {
    setIsOpen(false)
    setStars({ correct: [], mistakes: 0 })
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