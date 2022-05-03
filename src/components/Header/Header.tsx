import { FC } from 'react'
import Container from '../Container/Container'
import classes from './Header.module.scss'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { Link } from 'react-router-dom'
import { HOME_ROUTE } from '../../constants/internalLinks'
import Burger from '../Burger/Burger'

const Header: FC = () => {
  const { isPlayMode } = useTypedSelector((state) => state.gameMode)
  const { setIsPlayMode } = useActions()

  const onSelectGameMode = () => {
    setIsPlayMode()
  }

  return (
    <Container>
      <Burger />
      <header className={classes.header}>
        <Link to={HOME_ROUTE}>
          <h1 className={classes.title}>English for kids</h1>
        </Link>
        <label className={classes.switch} htmlFor="switch">
          <input
            className={classes.checkbox}
            id="switch"
            type="checkbox"
            checked={isPlayMode}
          />
          <div className={classes.slider} onClick={onSelectGameMode} />
        </label>
      </header>
    </Container>
  )
}

export default Header
