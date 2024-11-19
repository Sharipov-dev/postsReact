import NewPost from './NewPost.jsx';
import Post from './Post.jsx';
import styles from './Posts.module.css';
import Modal from './Modal.jsx';
import { useState } from 'react';
function Posts({ isVisible, visibilityHandler }) {
  const [posts, setPosts] = useState([]);
  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      <Modal onClose={visibilityHandler} isVisible={isVisible}>
        <NewPost
          onCancel={visibilityHandler}
          onAddPost={addPostHandler}
        ></NewPost>
      </Modal>
      {posts.length > 0 ? (
        <ul className={styles.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      ) : (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}
export default Posts;
