import { FC } from 'react'
import Container from '../Container/Container'
import classes from './Header.module.scss'
import { useActions } from '../../hooks/useActions'

const Header: FC = () => {
  const {setIsPlayMode} = useActions()

  const onSelectGameMode = () => {
    setIsPlayMode()
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
