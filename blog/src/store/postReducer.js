import { LOAD_POST, TOGGLE_BOOKED, DELETE_POST, SAVE_POST } from "./types";

const initialState = {
  allPost: [],
  bookedPost: []
};

const handlers = {
  [LOAD_POST]: (state, { payload }) => ({
    ...state,
    allPost: payload,
    bookedPost: payload.filter(post => post.booked)
  }),
  [TOGGLE_BOOKED]: (state, { payload }) => {
    const allPost = state.allPost.filter(post => {
      if (post.id === payload) {
        post.booked = !post.booked;
      }
      return post;
    });
    return {
      ...state,
      allPost,
      bookedPost: allPost.filter(post => post.booked)
    };
  },
  [DELETE_POST]: (state, { payload }) => {
    console.log("reducer", payload);
    return {
      ...state,
      allPost: state.allPost.filter(post => post.id !== payload),
      bookedPost: state.bookedPost.filter(post => post.id !== payload)
    };
  },
  [SAVE_POST]: (state, { payload }) => {
    console.log("payload in reducer", payload);
    return {
      ...state,
      allPost: [{ ...payload }, ...state.allPost]
    };
  },
  DEFAULT: state => state
};

export const postReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
