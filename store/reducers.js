import { combineReducers } from 'redux'

import { mode } from './mode-switcher/reducers'
import { menu } from './menu/reducers'

export default combineReducers({
  mode,
  menu
})
