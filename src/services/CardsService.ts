import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { APP_ROUTE } from '../constants/internalLinks'
import { Card } from '../models/Card'

export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: APP_ROUTE,
  }),
  endpoints: (builder) => ({
    fetchCards: builder.query<Card, string>({
      query: (category: string) => ({
        url: category
      }),
    }),
  }),
})

export const { useFetchCardsQuery } = cardsApi