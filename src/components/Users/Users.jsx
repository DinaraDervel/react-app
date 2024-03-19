import React from "react";
import axios from "axios";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/null_avatar.svg";

class Users extends React.Component {
  getUsers = () => {
    if (this.props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          this.props.setUsers(response.data.items);
        });
    }
  };
  render() {
    return (
      <div>
        <button onClick={this.getUsers}>Get Users</button>
        {this.props.users.map((el) => (
          <div key={el.id}>
            <span>
              <div>
                <img
                  src={el.photos.small != null ? el.photos.small : userPhoto}
                  alt="user"
                  className={styles.userPhoto}
                />
              </div>
              <div>
                {el.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(el.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(el.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{el.name}</div>
                <div>{el.status}</div>
              </span>
              <span>
                <div>el.location.country</div>
                <div>el.location.city</div>
              </span>
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
