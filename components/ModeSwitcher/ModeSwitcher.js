import { useSelector, useDispatch } from 'react-redux'

import { changeMode } from './../../store/mode-switcher/actions'

import styles from './mode-switcher.module.scss'

const ModeSwitcher = () => {
  const dispatch = useDispatch()

  return (
    <label className={styles['mode-switcher']}>
      <input className={styles['mode-switcher__checkbox']} type="checkbox" />
      <span
        className={styles['mode-switcher__slider']}
        onClick={() => {
          dispatch(changeMode())
        }}
      />
    </label>
  )
}

export default ModeSwitcher
