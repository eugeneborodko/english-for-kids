import { createSlice } from '@reduxjs/toolkit'

export const gameModeSlice = createSlice({
  name: 'gameMode',
  initialState: {
    isPlayMode: false,
  },
  reducers: {
    setIsPlayMode: (state) => {
      state.isPlayMode = !state.isPlayMode
    },
  },
})

export const { setIsPlayMode } = gameModeSlice.actions

export default gameModeSlice.reducer
