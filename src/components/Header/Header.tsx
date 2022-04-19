import { FC } from 'react'
import Container from '../Container/Container'
import classes from './Header.module.scss'

const Header: FC = () => {
  return (
    <Container>
      <header className={classes.header}>
        <h1 className={classes.title}>English for kids</h1>
        <label className={classes.switch} htmlFor="switch">
          <input className={classes.checkbox} id="switch" type="checkbox" />
          <div className={classes.slider} />
        </label>
      </header>
    </Container>
  )
}

export default Header
