import { useSelector, useDispatch } from 'react-redux'

import { changeMode } from './../../store/mode-switcher/actions'

import './mode-switcher.scss'

const ModeSwitcher = () => {
  const mode = useSelector((state) => state.mode)
  const dispatch = useDispatch()

  return (
    <label className="mode-switcher">
      <input className="mode-switcher__checkbox" type="checkbox" />
      <span
        className="mode-switcher__slider"
        onClick={() => {
          dispatch(changeMode())
        }}
      />
    </label>
  )
}

export default ModeSwitcher
