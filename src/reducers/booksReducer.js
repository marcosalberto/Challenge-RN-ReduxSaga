import { RECEIVE_BOOKS, REQUEST_BOOKS, CLEAR_BOOKS } from '../actions/types'

const initialState = {
  isFetching: false,
  items: [],
}

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_BOOKS:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_BOOKS:
      return {
        ...state,
        isFetching: false,
        items: [...state.items, ...action.payload],
      }
    case CLEAR_BOOKS:
      return initialState
    default:
      return state
  }
}

export default booksReducer
