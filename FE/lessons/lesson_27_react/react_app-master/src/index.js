import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

// let stateCount = 0;
// const reducer = (state = stateCount, action) => {
//   // if (action === 'INCREMENT') {
//   //   return state + 1;
//   // } else if (action === 'DECREMENT') {
//   //   return state - 1;
//   // } else {
//   //   return state;
//   // }

//   switch (action) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       return state;
//   }
// };

// stateCount = reducer(stateCount, 'INCREMENT');
// stateCount = reducer(stateCount, 'INCREMENT');
// stateCount = reducer(stateCount, 'DECREMENT');
// stateCount = reducer(stateCount, 'HELLO');
// console.log(stateCount);

// const reducer = (state = stateCount, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       let count = 1;
//       if (action.payload) {
//         count = action.payload;
//       }
//       return state + count;
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       return state;
//   }
// };

// stateCount = reducer(stateCount, { type: 'INCREMENT', payload: 2 });
// stateCount = reducer(stateCount, { type: 'INCREMENT', payload: 3 });
// stateCount = reducer(stateCount, { type: 'INCREMENT', payload: 4 });
// console.log(stateCount);

// let initState = {
//   posts: [
//     { id: 1, title: 'Title 1', description: 'Hello World!!!' },
//     { id: 2, title: 'Title 2', description: 'Hello World!!!' },
//     { id: 3, title: 'Title 3', description: 'Hello World!!!' },
//     { id: 4, title: 'Title 4', description: 'Hello World!!!' },
//   ],
//   todo: [],
// };

// const ADD_POST = 'ADD_POST';
// const REMOVE_POST = 'REMOVE_POST';
// const EDIT_POST = 'EDIT_POST';

// const addPost = (data) => {
//   return { type: ADD_POST, payload: data };
// };
// const removePost = (id) => {
//   return { type: REMOVE_POST, payload: id };
// };
// const editPost = (data) => {
//   return { type: EDIT_POST, payload: data };
// };

// const reducer = (state = initState, action) => {
//   switch (action.type) {
//     case ADD_POST:
//       return { ...state, posts: [...state.posts, action.payload] };
//     case REMOVE_POST:
//       return {
//         ...state,
//         posts: [...state.posts.filter((el) => el.id !== action.payload)],
//       };
//     case EDIT_POST:
//       return {
//         ...state,
//         posts: state.posts.map((el) =>
//           el.id === action.payload.id ? (el = action.payload) : el
//         ),
//       };
//     default:
//       return state;
//   }
// };
// const newPost = { id: 5, title: 'Title 5', description: 'Hello World!!!' };

// initState = reducer(initState, addPost(newPost));
// initState = reducer(initState, removePost(3));
// initState = reducer(
//   initState,
//   editPost({ id: 2, title: 'EDIT TITTLE', description: 'EDIT DESCRIPTION' })
// );
// console.log(initState);
console.log(store);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
