import { useSelector } from 'react-redux'

import styles from './menu.module.scss'

const Menu = () => {
  const isPlay = useSelector((state) => state.mode.isPlay)
  const isShowMenu = useSelector((state) => state.menu.isShowMenu)

  const captions = [
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
        isShowMenu ? styles['menu-container'] : `${styles['menu-container']} ${styles['menu-container_hidden']}`
      }
    >
      <div className={isPlay ? `${styles['menu']} ${styles['menu_orange']}` : `${styles['menu']} ${styles['menu_green']}`}>
        {captions.map((caption, index) => {
          return (
            <a
              className={styles['menu__link']}
              href={`/category/${caption
                .replace(/[{()}]/g, '')
                .replace(/ /g, '-')
                .toLowerCase()}`}
              key={index}
            >
              {caption}
            </a>
          )
        })}
      </div>
    </aside>
  )
}

export default Menu
