import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likes={p.likesCount} key={p.id} />
  ));

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch({ type: "UPDATE-NEW-POST-TEXT", newText: text });
  };

  let newPostElement = React.createRef();
  let addPost = () => {
    props.dispatch({ type: "ADD-POST" });
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
        <input type="submit" value="Send" onClick={addPost} />
      </form>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
