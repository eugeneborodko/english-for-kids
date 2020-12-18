import { CHANGE_MENU_STATE } from './actions'

const initialState = {
  isShowMenu: false,
}

export const menu = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MENU_STATE:
      return {
        ...state,
        isShowMenu: !state.isShowMenu,
      }

    default:
      return state
  }
}
