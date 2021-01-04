import { useDispatch } from 'react-redux'

import { changeMenuState } from '../../store/menu/actions'

import styles from './burger.module.scss'

const Burger = () => {
  const dispatch = useDispatch()

  return (
    <div className={styles['burger']} onClick={() => dispatch(changeMenuState())}>
      <div className={`${styles['burger__line']} ${styles['burger__line_1']}`}></div>
      <div className={`${styles['burger__line']} ${styles['burger__line_2']}`}></div>
      <div className={`${styles['burger__line']} ${styles['burger__line_3']}`}></div>
    </div>
  )
}

export default Burger
