import { SET_LIKED } from '../action'

const initialState = {
  likedSong: [],
}
const likedReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIKED:
      return {
        ...state,
        likedSong: [...state.likedSong, action.payload],
      }
    default:
      return state
  }
}

export default likedReducer
