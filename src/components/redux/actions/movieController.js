export function addToQueue(data) {
  return {
    type: "addToQueue",
    payload: data
  };
}

export function removeFromQueue(data) {
  return {
    type: "removeFromQueue",
    payload: data
  };
}

export function addToMarquee(data) {
  return {
    type: "addToMarquee",
    payload: data
  };
}

export function addToArchive(data) {
  return {
    type: "addToArchive",
    payload: data
  };
}
