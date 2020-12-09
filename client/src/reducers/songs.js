import { FETCH_SONGS, FETCH_SONGS_ERROR, LOADING } from "./../actions/types";

const initialState = {
  list: [],
  loading: false,
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case FETCH_SONGS:
      return {
        ...state,
        list: action.payload,
        error: "",
        loading: false,
      };
    case FETCH_SONGS_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
