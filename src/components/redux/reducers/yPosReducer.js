const initialState = {
  marqueeHeight: 0,
  navbarHeight: 0,
  movieListYPos: 0
}
export default function(state = initialState, action) {
  switch (action.type) {
    case "getMarqueeHeight":
      return {
        ...state,
        marqueeHeight: action.payload
      };
    case "getNavbarHeight":
      return {
        ...state,
        navbarHeight: action.payload
      };
    case "getMovieListYPos":
      return {
        ...state,
        movieListYPos: action.payload
      };
    default:
      return state;
  }
}
