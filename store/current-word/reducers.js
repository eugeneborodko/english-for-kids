import { SET_WORD } from './actions'

const initialState = {
  currentWord: '',
}

export const currentWord = (state = initialState, action) => {
  switch (action.type) {
    case SET_WORD:
      return {
        ...state,
        currentWord: action.payload,
      }

    default:
      return state
  }
}
