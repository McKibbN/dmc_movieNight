export function getQueueOffset(data) {
  return {
    type: "getContactOffset",
    payload: data
  };
}

export function getMarqueeHeight(data) {
  return {
    type: "getMarqueeHeight",
    payload: data
  };
}

export function getNavbarHeight(data) {
  return {
    type: "getNavbarHeight",
    payload: data
  };
}

export function getMovieListYPos(data) {
  return {
    type: "getMovieListYPos",
    payload: data
  };
}
