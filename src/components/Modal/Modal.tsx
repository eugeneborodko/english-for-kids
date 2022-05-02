import { FC, MouseEvent, ReactNode } from 'react'
import classes from './Modal.module.scss'

interface ModalProps {
  isOpen: boolean
  setIsOpen: (bool: boolean) => void
  children: ReactNode
}

const Modal: FC<ModalProps> = ({isOpen, setIsOpen, children}) => {
  

  const modalClass = [classes.modal]

  if (isOpen) {
    modalClass.push(classes.active)
  }

  const onModalClose = () => {
    setIsOpen(false)
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