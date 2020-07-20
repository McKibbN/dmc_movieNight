const initialState = {
  isDrawerOpen: false
}
export default function(state = initialState, action) {
  switch (action.type) {
    case "drawerAction":
      return {
        ...state,
        isDrawerOpen: action.payload
      };
    default:
      return state;
  };
}
