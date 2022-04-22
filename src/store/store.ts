import { configureStore } from '@reduxjs/toolkit'
import { cardsApi } from '../services/CardsService'
import { previewCardsApi } from '../services/PreviewCardsService'
import gameModeSlice from './gameModeSlice'

export const store = configureStore({
  reducer: {
    gameMode: gameModeSlice,
    [cardsApi.reducerPath]: cardsApi.reducer,
    [previewCardsApi.reducerPath]: previewCardsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cardsApi.middleware).concat(previewCardsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
