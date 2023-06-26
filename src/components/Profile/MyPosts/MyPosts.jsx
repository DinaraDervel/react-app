import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let posts = [
    {
      id: 1,
      message: "Sweet! So, what do you wanna do today?",
      likesCount: 12,
    },
    { id: 2, message: "Hi! It's my first post", likesCount: 11 },
  ];
  let postsElements = posts.map((p) => (
    <Post message={p.message} likes={p.likesCount} />
  ));

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
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
