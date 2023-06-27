import FriendItem from "./FriendItem/FriendItem";
import s from "./../Navbar.module.css";

const Friends = (props) => {
  let friendsElements = props.state.friends.map((f) => (
    <FriendItem name={f.name} />
  ));
  return (
    <div className={s.friendsContainer}>
      <h2>Friends</h2>
      <div className={s.friends}>{friendsElements}</div>
    </div>
  );
};
export default Friends;
