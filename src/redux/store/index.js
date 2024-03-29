import { combineReducers, configureStore } from '@reduxjs/toolkit'
import searchReducer from '../reducers/search'
import playerReducer from '../reducers/player'
import favouritesReducer from '../reducers/favourites'

const bigReducer = combineReducers({
  search: searchReducer,
  player: playerReducer,
  favourites: favouritesReducer,
})

const store = configureStore({
  reducer: bigReducer,
})
export default store
