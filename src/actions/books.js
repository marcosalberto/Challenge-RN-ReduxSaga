import { REQUEST_BOOKS, RECEIVE_BOOKS, CLEAR_BOOKS } from './types'

export const requestBooks = (query = '', startAt = 0) => {
  return {
    type: REQUEST_BOOKS,
    query,
    startAt,
  }
}

export const receiveBooks = (payload = []) => {
  return {
    type: RECEIVE_BOOKS,
    payload: payload,
  }
}

export const clearBooks = () => {
  return {
    type: CLEAR_BOOKS,
  }
}
