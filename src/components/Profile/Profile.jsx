import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <main className={s.container}>
      <div className={s.picture}>
        <img
          src="https://marketplace.canva.com/MADQ5PeveDs/1/screen_2x/canva-galaxy-in-outter-space-MADQ5PeveDs.jpg"
          alt="space"
        />
      </div>
      <div className={s.decription}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Y-GdHiZ402GuKd211B9oz-s4AdIdoEjKKw&usqp=CAU"
          alt="avatar"
          className={s.avatar}
        />

        <section>
          <h2>Joan H.</h2>
          <p>
            Date of birth: <span>07/24/2033</span>
          </p>
          <p>
            City: <span>Newest-York</span>
          </p>
          <p>
            Education: <span>Space Academy'53</span>
          </p>
          <p>
            Web-site: <span>www.joan-h.com</span>
          </p>
        </section>
      </div>
      <MyPosts />
    </main>
  );
};

export default Profile;
