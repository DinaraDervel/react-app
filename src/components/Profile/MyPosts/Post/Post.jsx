import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.post}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA4LPcMraeZ1ra8qRl1m2IacMAbIAxBUVlzQ&usqp=CAU"
        alt="small_avatar"
      />
      <p>{props.message}</p>
      <span className={s.like}>likes: {props.likes}</span>
    </div>
  );
};

export default Post;
