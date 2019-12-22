import { LOAD_POST, TOGGLE_BOOKED, DELETE_POST, SAVE_POST } from "./types";

import { DATA } from "../data";

export const loadPosts = () => ({
  type: LOAD_POST,
  payload: DATA
});

export const toggleBooked = id => ({
  type: TOGGLE_BOOKED,
  payload: id
});

export const deletePost = id => ({
  type: DELETE_POST,
  payload: id
});

export const addPost = post => ({
  type: SAVE_POST,
  payload: post
});
