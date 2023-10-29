import { getAllPost } from '../actions/PostAction';

export const fetchAllPost = () => {
  return (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => dispatch(getAllPost(json)));
  };
};
