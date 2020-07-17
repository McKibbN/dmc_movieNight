const initialState = {
  queue: [],
  archive: [],
  marqueeFilm: [{title: 'Plug Love', link: 'https://www.youtube.com/watch?v=cl4J7MUmzv4&t=25s', genre: 'Drama / Crime', runtime:'2h 23m', user:'aja'}]
}
export default function(state = initialState, action) {
  switch (action.type) {
    case "addToQueue":
      return {
        ...state,
        queue: state.queue.concat(action.payload)
      };
    case "removeFromQueue":
      return {
        ...state,
        queue: state.queue.filter((payload, index) => index !== action.payload)
      };
    case "addToMarquee":
    return {
      ...state,
      marqueeFilm: [
          ...state.queue.filter((payload, index) => index === action.payload)
      ],
      queue: state.queue.filter((payload, index) => index !== action.payload)
    };
    case "addToArchive":
    return {
      ...state,
      archive: [
          ...state.archive,
          ...state.marqueeFilm.filter((payload, index) => index === action.payload)
      ],
      marqueeFilm: []
    };
    default:
      return state;
  };
}
