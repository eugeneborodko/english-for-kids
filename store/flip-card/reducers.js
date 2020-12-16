import { ROTATE_FLIP_CARD } from './actions'

const initialState = {
  isBack: false
}

export const flipCard = (state = initialState, action) => {
  switch (action.type) {
    case ROTATE_FLIP_CARD:
      return {
        ...state,
        isBack: !state.isBack
      }

    default: return state
  }
}