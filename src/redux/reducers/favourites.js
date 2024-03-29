import { ADD_FAVE } from "../action/index"
import { REMOVE_FAVE } from "../action/index"

const initialState = {
  content: [],
}
const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVE:
      return {
        ...state,
        content: state.content.concat(action.payload)
      }
      case REMOVE_FAVE:
      return {
        ...state,
        content: state.content.filter((fav, index) => index !== action.payload),
      }
    default:
      return state
  }
}

export default favouritesReducer
