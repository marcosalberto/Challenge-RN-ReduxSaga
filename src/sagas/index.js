import { all } from 'redux-saga/effects'
import { watchRequestBooks } from './booksSagas'

export default function* rootSaga() {
  yield all([watchRequestBooks()])
}
