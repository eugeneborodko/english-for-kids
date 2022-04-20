import { configureStore } from '@reduxjs/toolkit'
import { cardsApi } from '../services/CardsService'
import { previewCardsApi } from '../services/PreviewCardsService'

export const store = configureStore({
  reducer: {
    [cardsApi.reducerPath]: cardsApi.reducer,
    [previewCardsApi.reducerPath]: previewCardsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cardsApi.middleware).concat(previewCardsApi.middleware),
})
