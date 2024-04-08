import styles from "./Users.module.css";
import userPhoto from "../../assets/images/null_avatar.svg";
import { NavLink } from "react-router-dom";
import axios from "axios";

export const Users = (props) => {
  //let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pagesCount = 5;
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <>
      <div>
        {pages.map((p) => (
          <span
            className={
              props.currentPage === p ? styles.selectedPage : undefined
            }
            onClick={() => {
              props.onPageChanged(p);
            }}
          >
            {p}
          </span>
        ))}
      </div>
      <div>
        {props.users.map((el) => (
          <div key={el.id}>
            <span>
              <div>
                <NavLink to={"/profile/" + el.id}>
                  <img
                    src={el.photos.small != null ? el.photos.small : userPhoto}
                    alt="user"
                    className={styles.userPhoto}
                  />
                </NavLink>
              </div>
              <div>
                {el.followed ? (
                  <button
                    onClick={() => {
                      axios
                        .delete(
                          `https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,
                          {
                            withCredentials: true,
                          }
                        )
                        .then((response) => {
                          if (response.data.resultCode === 0) {
                            props.unfollow(el.id);
                          }
                        });
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      axios
                        .post(
                          `https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,
                          {},
                          {
                            withCredentials: true,
                          }
                        )
                        .then((response) => {
                          if (response.data.resultCode === 0) {
                            props.follow(el.id);
                          }
                        });
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
    </>
  );
};
