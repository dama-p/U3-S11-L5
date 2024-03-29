const initialState = {
  favourites: [],
  search: "",
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH":
        return { ...state, search: action.payload };

    case "ADD_FAVOURITE":
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };

    case "REMOVE_FAVOURITE":
      return {
        ...state,
        favourites: state.favourites.filter((favourite) => favourite !== action.payload),
      };

    default:


      return state;
  }
};

export default mainReducer;

