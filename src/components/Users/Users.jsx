import styles from "./Users.module.css";
import userPhoto from "../../assets/images/null_avatar.svg";

export const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
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
                      props.unfollow(el.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.follow(el.id);
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
