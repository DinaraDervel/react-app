import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {
  return (
    <main className={s.container}>
      <ProfileInfo />
      <MyPostsContainer />
    </main>
  );
};

export default Profile;
