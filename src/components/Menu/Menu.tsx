import { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useFetchAllPreviewCardsQuery } from '../../services/PreviewCardsService'
import classes from './Menu.module.scss'

const Menu: FC = () => {
  const { isMenuOpened, isPlayMode } = useTypedSelector(
    (state) => state.gameMode
  )
  const { setIsMenuOpened } = useActions()
  const { data: links, error } = useFetchAllPreviewCardsQuery()

  const menuClass = [classes.menu]
  const pageClass = [classes.page]

  if (isMenuOpened) {
    menuClass.push(classes.opened)
    pageClass.push(classes.active)
  }

  if (isPlayMode) {
    menuClass.push(classes.playMode)
  }

  const onMenuClose = () => {
    setIsMenuOpened()
  }

  return (
    <div className={pageClass.join(' ')} onClick={onMenuClose}>
      <aside className={menuClass.join(' ')}>
        {error && <div>{error as ReactNode}</div>}
        {links?.map((link) => {
          return (
            <Link className={classes.link} key={link.id} to={link.link}>
              {link.title}
            </Link>
          )
        })}
      </aside>
    </div>
  )
}

export default Menu
