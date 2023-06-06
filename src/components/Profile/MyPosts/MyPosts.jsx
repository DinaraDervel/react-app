import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={s.myposts}>
      <h1>My posts</h1>
      <form className={s.form}>
        <textarea
          name="newpost"
          id="newpost"
          cols="100"
          rows="2"
          placeholder="your news.."
          required
        ></textarea>
        <input type="submit" value="Send" />
      </form>
      <div className={s.posts}>
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default MyPosts;
