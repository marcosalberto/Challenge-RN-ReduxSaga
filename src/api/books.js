import { api } from '../config/constants'

export const fetchGoogleBooksByQuery = params => {
  const { query, startAt } = params
  return fetch(
    api.GOOGLE_BOOKS_FETCH_BY_QUERY +
      query +
      '&startIndex=' +
      startAt +
      '&maxResults=' +
      api.GOOGLE_BOOKS_ITEMS_PER_PAGE +
      '&key=' +
      api.GOOGLE_BOOKS_KEY
  ).then(response => response.json())
}
