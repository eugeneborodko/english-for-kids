import Burger from './../Burger/Burger'
import ModeSwitcher from './../ModeSwitcher/ModeSwitcher'

import './header.scss'

const Header = () => {
  return (
    <header className="header body__header">
      <Burger />
      <ModeSwitcher />
    </header>
  )
}

export default Header
