import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likes={p.likesCount} key={p.id} />
  ));

  let newPostElement = React.createRef();

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  let onAddPost = (e) => {
    props.addPost();
  };

  return (
    <div className={s.myposts}>
      <h1>My posts</h1>
      <form className={s.form} onClick={(e) => e.preventDefault()}>
        <textarea
          onChange={onPostChange}
          value={props.newPostText}
          ref={newPostElement}
          name="newpost"
          id="newpost"
          cols="100"
          rows="2"
          placeholder="your news.."
          required
        ></textarea>
        <input type="submit" value="Send" onClick={onAddPost} />
      </form>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
