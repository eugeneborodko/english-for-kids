import { useSelector, useDispatch } from 'react-redux'

import { changeMode } from './../../store/mode-switcher/actions'
import { finishGame } from './../../store/start-btn/actions'

import './mode-switcher.scss'

const ModeSwitcher = () => {
  const isPlay = useSelector((state) => state.mode.isPlay)
  const dispatch = useDispatch()

  return (
    <label className="mode-switcher">
      <input className="mode-switcher__checkbox" type="checkbox" />
      <span
        className="mode-switcher__slider"
        onClick={() => {
          dispatch(changeMode())
          if (isPlay) dispatch(finishGame())
        }}
      />
    </label>
  )
}

export default ModeSwitcher
