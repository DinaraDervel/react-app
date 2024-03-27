import React from "react";
import s from "./ProfileInfo.module.css";
import { Preloader } from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) return <Preloader />;
  let contacts = [];
  for (const [key, value] of Object.entries(props.profile.contacts))
    if (value)
      contacts.push(
        <p>
          {key}: <span>{value}</span>
        </p>
      );

  return (
    <div className={s.container}>
      <div className={s.picture}>
        <img
          src="https://marketplace.canva.com/MADQ5PeveDs/1/screen_2x/canva-galaxy-in-outter-space-MADQ5PeveDs.jpg"
          alt="space"
        />
      </div>
      <div className={s.decription}>
        <img
          src={props.profile.photos.large}
          // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Y-GdHiZ402GuKd211B9oz-s4AdIdoEjKKw&usqp=CAU"
          alt="avatar"
          className={s.avatar}
        />
        <section>
          <h2>{props.profile.fullName}</h2>
          <p>
            About me: <span>{props.profile.aboutMe}</span>
          </p>
          <p>
            Looking for a job:{" "}
            <span>{props.profile.lookingForAJob ? "yes" : "no"}</span>
          </p>
          <p>
            Description: <span>{props.profile.lookingForAJobDescription}</span>
          </p>
          <p>Contacts: {contacts}</p>
        </section>
      </div>
    </div>
  );
};

export default ProfileInfo;
