import { FC } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import classes from './Burger.module.scss'

const Burger: FC = () => {
  const {isMenuOpened} = useTypedSelector((state) => state.gameMode)
  const { setIsMenuOpened} = useActions()

  const burgerLineClass = [classes.line]

  if (isMenuOpened) {
    burgerLineClass.push(classes.rotated)
  }

  const onBurgerClick = () => {
    setIsMenuOpened()
  }

  return (
    <div className={classes.burger} onClick={onBurgerClick}>
      <div className={burgerLineClass.join(' ')} />
      <div className={burgerLineClass.join(' ')} />
      <div className={burgerLineClass.join(' ')} />
    </div>
  )
}

export default Burger
