import { REQUEST_BOOKS, RECEIVE_BOOKS, CLEAR_BOOKS } from './types'

export const requestBooks = () => {
    return {
        type: REQUEST_BOOKS
    }
}

export const receiveBooks = (payload = []) => {
    return {
        type: RECEIVE_BOOKS,
        payload: payload
    }
}

export const clearBooks = () => {
    return {
        type: CLEAR_BOOKS
    }
}