import { ROTATE_TRAIN_CARD } from './actions'

const initialState = {
  isBack: false,
}

export const trainCard = (state = initialState, action) => {
  switch (action.type) {
    case ROTATE_TRAIN_CARD:
      return {
        ...state,
        isBack: !state.isBack,
      }

    default:
      return state
  }
}
