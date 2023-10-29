import { useDispatch, useSelector } from 'react-redux';
import style from './App.module.css';
import { Context } from './context';
import { useState } from 'react';
import { addPost } from './store/actions/PostAction';
import { fetchAllPost } from './store/asyncAction/Posts';

function App() {
  const dispatch = useDispatch();
  const { posts, asyncPosts } = useSelector((state) => state.posts);
  const [newPost, setNewPost] = useState({
    title: '',
    description: '',
  });
  const handleChange = (event) => {
    let post = {
      id: Date.now(),
      ...newPost,
    };
    post[event.target.name] = event.target.value;
    setNewPost(post);
  };

  const nandlerSave = () => {
    dispatch(addPost(newPost));
    setNewPost({ title: '', description: '' });
  };

  return (
    <main>
      <div className={style.form}>
        <div>
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={newPost.title}
            name="title"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Description</label>
          <input
            type="text"
            value={newPost.description}
            name="description"
            onChange={handleChange}
          />
        </div>
        <div>
          <button onClick={nandlerSave}>ADD POST</button>
          <button onClick={() => dispatch(fetchAllPost())}>
            GET ALL POSTS
          </button>
        </div>
      </div>
      <div>
        {posts &&
          posts.map((post) => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </div>
          ))}
      </div>
      <div>
        {asyncPosts &&
          asyncPosts.map((post) => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </div>
          ))}
      </div>
    </main>
  );
}

export default App;
