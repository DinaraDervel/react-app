import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likes={p.likesCount} key={p.id} />
  ));

  let addNewPost = (values) => {
    props.addPost(values.newPostBody);
  };

  return (
    <div className={s.myposts}>
      <h1>My posts</h1>
      <AddMessageFormRedux onSubmit={addNewPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

const AddNewPost = (props) => {
  return (
    <form className={s.form} onSubmit={props.handleSubmit}>
      <Field
        component="textarea"
        name="newPostBody"
        placeholder="your news.."
      />
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: "profileAddPostForm" })(
  AddNewPost
);

export default MyPosts;
