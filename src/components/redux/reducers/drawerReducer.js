const initialState = {
  isDrawerOpen: false
}
export default function(state = initialState, action) {
  switch (action.type) {
    case "drawerAction":
      return {
        isDrawerOpen: action.payload
      };
    default:
      return state;
  };
}
