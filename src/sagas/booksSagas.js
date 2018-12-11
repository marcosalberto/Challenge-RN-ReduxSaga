import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchGoogleBooksByQuery } from '../api/books'
import { REQUEST_BOOKS } from '../actions/types'
import { receiveBooks } from '../actions/books'

function* requestData(action) {
  try {
    const data = yield call(fetchGoogleBooksByQuery, action)
    yield put(receiveBooks(data.items))
  } catch (error) {
    console.log('requestData', error)
  }
}

export function* watchRequestBooks() {
  yield takeLatest(REQUEST_BOOKS, requestData)
}
