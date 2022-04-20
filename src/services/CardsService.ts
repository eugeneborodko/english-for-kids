import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_ROUTE } from '../constants/internalLinks'
import { Card } from '../models/Card'

export const cardsApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_ROUTE,
  }),
  endpoints: (builder) => ({
    fetchCards: builder.query<Card[], string>({
      query: (category: string) => ({
        url: category
      }),
    }),
  }),
})

export const { useFetchCardsQuery } = cardsApi