import { createSlice } from '@reduxjs/toolkit'

export const gameModeSlice = createSlice({
  name: 'gameMode',
  initialState: {
    isPlayMode: false,
    isMenuOpened: false
  },
  reducers: {
    setIsPlayMode: (state) => {
      state.isPlayMode = !state.isPlayMode
    },
    setIsMenuOpened: (state) => {
      state.isMenuOpened = !state.isMenuOpened
    }
  },
})

export const { setIsPlayMode, setIsMenuOpened } = gameModeSlice.actions

export default gameModeSlice.reducer
