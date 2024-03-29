import { combineReducers, configureStore } from '@reduxjs/toolkit'
import searchReducer from '../reducers/search'
import playerReducer from '../reducers/player'
import likedReducer from '../reducers/liked'

const bigReducer = combineReducers({
  search: searchReducer,
  player: playerReducer,
  liked: likedReducer,
})

const store = configureStore({
  reducer: bigReducer,
})
export default store
