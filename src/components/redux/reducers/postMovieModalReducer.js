const initialState = {
  isPostMovieModalOpen: false
}
export default function(state = initialState, action) {
  switch (action.type) {
    case "modalInteraction":
      return {
        ...state,
        isPostMovieModalOpen: action.payload
      };
    default:
      return state;
  }
}
