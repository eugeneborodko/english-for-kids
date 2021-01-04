import Burger from './../Burger/Burger'
import Logo from './../Logo/Logo'
import ModeSwitcher from './../ModeSwitcher/ModeSwitcher'

import styles from './header.module.scss'

const Header = () => {
  return (
    <header className={`${styles['header']} ${styles['body__header']}`}>
      <Burger />
      <Logo />
      <ModeSwitcher />
    </header>
  )
}

export default Header
