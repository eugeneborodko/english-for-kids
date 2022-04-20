import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_ROUTE, PREVIEW_CARDS_ROUTE } from '../constants/internalLinks'
import { PreviewCard } from '../models/PreviewCard'

export const previewCardsApi = createApi({
  reducerPath: 'previewCardsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_ROUTE,
  }),
  endpoints: (builder) => ({
    fetchAllPreviewCards: builder.query<PreviewCard[], void>({
      query: () => ({
        url: PREVIEW_CARDS_ROUTE,
      }),
    }),
  }),
})

export const { useFetchAllPreviewCardsQuery } = previewCardsApi