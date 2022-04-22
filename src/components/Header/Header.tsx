import { FC } from 'react'
import { useDispatch } from 'react-redux'
import Container from '../Container/Container'
import { setIsPlayMode } from '../../store/gameModeSlice'
import classes from './Header.module.scss'

const Header: FC = () => {
  const dispatch = useDispatch()

  const onSelectGameMode = () => {
    dispatch(setIsPlayMode())
  }

  return (
    <Container>
      <header className={classes.header}>
        <h1 className={classes.title}>English for kids</h1>
        <label className={classes.switch} htmlFor="switch">
          <input className={classes.checkbox} id="switch" type="checkbox" />
          <div className={classes.slider} onClick={onSelectGameMode} />
        </label>
      </header>
    </Container>
  )
}

export default Header
