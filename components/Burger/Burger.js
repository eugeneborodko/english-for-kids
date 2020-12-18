import { useDispatch } from 'react-redux'

import { changeMenuState } from '../../store/menu/actions'

import './burger.scss'

const Burger = () => {
  const dispatch = useDispatch()

  return (
    <div className="burger" onClick={() => dispatch(changeMenuState())}>
      <div className="burger__line burger__line_1"></div>
      <div className="burger__line burger__line_2"></div>
      <div className="burger__line burger__line_3"></div>
    </div>
  )
}

export default Burger
