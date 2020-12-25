import { combineReducers } from 'redux'

import { mode } from './mode-switcher/reducers'
import { menu } from './menu/reducers'
import { trainCard } from './train-card/reducers'

export default combineReducers({
  mode,
  menu,
  trainCard,
})
