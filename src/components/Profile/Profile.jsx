import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <main className={s.container}>
      <ProfileInfo />
      <MyPostsContainer store={props.store} />
    </main>
  );
};

export default Profile;
