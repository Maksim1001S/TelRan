import {
  ADD_POST,
  EDIT_POST,
  GET_ALL_POSTS,
  REMOVE_POST,
} from '../types/PostType';

let initState = {
  posts: [
    { id: 1, title: 'Title 1', description: 'Hello World!!!' },
    { id: 2, title: 'Title 2', description: 'Hello World!!!' },
    { id: 3, title: 'Title 3', description: 'Hello World!!!' },
    { id: 4, title: 'Title 4', description: 'Hello World!!!' },
  ],
  asyncPosts: [],
};

const PostReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    case REMOVE_POST:
      return {
        ...state,
        posts: [...state.posts.filter((el) => el.id !== action.payload)],
      };
    case EDIT_POST:
      return {
        ...state,
        posts: state.posts.map((el) =>
          el.id === action.payload.id ? (el = action.payload) : el
        ),
      };
    case GET_ALL_POSTS:
      return { ...state, asyncPosts: [...state.asyncPosts, ...action.payload] };
    default:
      return state;
  }
};

export default PostReducer;
