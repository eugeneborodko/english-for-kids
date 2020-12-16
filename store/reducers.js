import { combineReducers } from 'redux'

import { mode } from './mode-switcher/reducers'
import { menu } from './menu/reducers'
import { flipCard } from './flip-card/reducers'

export default combineReducers({
  mode,
  menu,
  flipCard
})
