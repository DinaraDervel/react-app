import styles from "./Users.module.css";

let Users = (props) => {
  if (props.users.length === 0)
    props.setUsers([
      {
        id: 1,
        photoURL: "https://cdn.jsdelivr.net/npm/twemoji@11.3.0/2/svg/1f47d.svg",
        followed: false,
        fullname: "Jhon",
        status: "I rock",
        location: { country: "US", city: "Old York" },
      },
      {
        id: 2,
        photoURL: "https://cdn.jsdelivr.net/npm/twemoji@11.3.0/2/svg/1f47d.svg",
        followed: true,
        fullname: "Mellisa",
        status: "Show must go on",
        location: { country: "Australia", city: "Sydney" },
      },
      {
        id: 3,
        photoURL: "https://cdn.jsdelivr.net/npm/twemoji@11.3.0/2/svg/1f47d.svg",
        followed: false,
        fullname: "Ben",
        status: "Tik-tak",
        location: { country: "Britain", city: "Older York" },
      },
    ]);

  return (
    <div>
      {props.users.map((el) => (
        <div key={el.id}>
          <span>
            <div>
              <img src={el.photoURL} alt="user" className={styles.userPhoto} />
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
              <div>{el.fullname}</div>
              <div>{el.status}</div>
            </span>
            <span>
              <div>{el.location.country}</div>
              <div>{el.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
