import booksReducer from './booksReducer'
import likesReducer from './likesReducer'

const reducers = (state = {}, action) => {
    return {
        books: booksReducer(state.books, action, state),
        likes: likesReducer(state.likes, action, state)
    }
}

export default reducers;