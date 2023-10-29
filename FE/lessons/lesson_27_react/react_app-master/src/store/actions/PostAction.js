import {
  ADD_POST,
  EDIT_POST,
  GET_ALL_POSTS,
  REMOVE_POST,
} from '../types/PostType';

export const addPost = (data) => {
  return { type: ADD_POST, payload: data };
};
export const removePost = (id) => {
  return { type: REMOVE_POST, payload: id };
};
export const editPost = (data) => {
  return { type: EDIT_POST, payload: data };
};

export const getAllPost = (data) => {
  return { type: GET_ALL_POSTS, payload: data };
};
