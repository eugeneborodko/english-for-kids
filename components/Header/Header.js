import Burger from './../Burger/Burger'
import Logo from './../Logo/Logo'
import ModeSwitcher from './../ModeSwitcher/ModeSwitcher'

import './header.scss'

const Header = () => {
  return (
    <header className="header body__header">
      <Burger />
      <Logo />
      <ModeSwitcher />
    </header>
  )
}

export default Header
