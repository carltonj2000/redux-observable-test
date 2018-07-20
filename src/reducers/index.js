import { LOADSTORIES, LOADSTORIESDONE } from "../actions";

const initialState = {
  stories: [],
  loading: false
};

const storiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADSTORIES:
      return { stories: [], loading: true };
    case LOADSTORIESDONE:
      return { stories: action.payload, loading: false };
    default:
      return state;
  }
};

export default storiesReducer;
