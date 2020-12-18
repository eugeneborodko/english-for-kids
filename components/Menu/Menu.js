import { useSelector } from 'react-redux'

import './menu.scss'

const Menu = () => {
  const isPlay = useSelector((state) => state.mode.isPlay)
  const isShowMenu = useSelector((state) => state.menu.isShowMenu)

  const captions = [
    'Main Page',
    'Action (set A)',
    'Action (set B)',
    'Animal (set A)',
    'Animal (set B)',
    'Clothes',
    'Emotions',
  ]

  return (
    <aside
      className={
        isShowMenu ? 'menu-container' : 'menu-container menu-container_hidden'
      }
    >
      <div className={isPlay ? 'menu menu_orange' : 'menu menu_green'}>
        {captions.map((caption, index) => {
          return (
            <a className="menu__link" href="#" key={index}>
              {caption}
            </a>
          )
        })}
      </div>
    </aside>
  )
}

export default Menu
