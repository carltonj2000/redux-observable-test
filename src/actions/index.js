export const LOADSTORIES = "LOADSTORIES";
export const LOADSTORIESDONE = "LOADSTORIESDONE";

export const loadStories = (count = 5) => ({
  type: LOADSTORIES,
  payload: count
});

export const loadStoriesDone = stories => ({
  type: LOADSTORIESDONE,
  payload: stories
});
