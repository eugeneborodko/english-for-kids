import { CHANGE_MODE } from './actions'

const initialState = {
  isPlay: false,
}

export const mode = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MODE:
      return {
        ...state,
        isPlay: !state.isPlay,
      }

    default:
      return state
  }
}
