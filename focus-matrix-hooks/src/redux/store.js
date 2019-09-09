import { createStore } from 'redux'
import matrixReducer from './matrixReducers'

const store = createStore(matrixReducer)

export default store