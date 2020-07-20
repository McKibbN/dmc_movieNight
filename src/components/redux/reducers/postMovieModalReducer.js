const initialState = {
  isModalOpen: false,
  test: false
}
export default function(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case "modalInteraction":
      return {
        ...state,
        isModalOpen: payload
      };
    case "setMarqueeModal":
      return {
        ...state,
        test: payload
      };
    default:
      return state;
  };
}
