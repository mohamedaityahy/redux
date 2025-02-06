import data from "./data";
const initialState = { users: data };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "add":
      return { ...state, users: [...state.users, action.payload] };
    case "delet":
      return {
        ...state,
        users: state.users.filter((u) => u.id !== action.payload),
      };
    case "edit":
      return {
        ...state,
        users:state.users.map((u) =>
          u.id === action.payload.id ? { ...u, ...action.payload } : u
        ),
      };
      default : return state
  }
};

export default reducer;
