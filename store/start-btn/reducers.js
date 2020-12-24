import { START_GAME } from './actions'
import { FINISH_GAME } from './actions'

const initialState = {
  isStarted: false,
}

export const startBtn = (state = initialState, action) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        isStarted: true,
      }

    case FINISH_GAME:
      return {
        ...state,
        isStarted: false,
      }

    default:
      return state
  }
}
