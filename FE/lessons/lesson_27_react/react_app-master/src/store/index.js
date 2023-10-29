import PostReducer from './reducers/PostReducer';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

// const store = createStore(PostReducer);

const rootReducer = combineReducers({
  posts: PostReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
