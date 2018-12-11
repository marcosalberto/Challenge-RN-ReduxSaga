import { LIKE_BOOK, DISLIKE_BOOK } from './types'

export const likeBook = id => {
    return {
        type: LIKE_BOOK,
        id
    }
}

export const dislikeBook = id => {
    return {
        type: DISLIKE_BOOK,
        id
    }
}