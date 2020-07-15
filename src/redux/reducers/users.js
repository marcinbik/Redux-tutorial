import { ADD_USER, REMOVE_USER, EDIT_USER } from "../actions/users";


const initialState = [];

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.user];

    case REMOVE_USER:
      return state.filter(({ id }) => id !== action.id);

    case EDIT_USER:
      console.log(action.user.id);
      return state.map((user) =>( user.id ===action.user.id) ? action.user : user  );

    default:
      return state;
  }
};

export default UserReducer;
