import s from "./../../Navbar.module.css";

const FriendItem = (props) => {
  return (
    <div className={s.friend}>
      <img
        src="https://cdn.jsdelivr.net/npm/twemoji@11.3.0/2/svg/1f47d.svg"
        alt="friend avatar"
        className={s.avatar}
      />
      {props.name}
    </div>
  );
};

export default FriendItem;
