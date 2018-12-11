import { LIKE_BOOK, DISLIKE_BOOK } from '../actions/types'

const likesReducer = (state = [], action, root) => {
    switch (action.type) {
        case LIKE_BOOK:
            const book = root.books.items.filter(item => {
                return item.id === action.id;
            })
            return [ ...state, ...book]
        case DISLIKE_BOOK:
            return state.filter(item => item.id !== action.id);
        default:
            return state
    }
}

export default likesReducer