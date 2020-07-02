import { ADD_ITEM, REMOVE_ITEM, EDIT_ITEM } from "../actions/movies";


const initialState = [];

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.movie];

    case REMOVE_ITEM:
      return state.filter(({ id }) => id !== action.id);

    case EDIT_ITEM:
      console.log(action);
      return state.map((movie) =>( movie.id ===action.movie.id) ? action.movie : movie  );

    default:
      return state;
  }
};

export default moviesReducer;
