import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return <main className={s.content}>
    <div className={s.picture}>
      <img src='https://marketplace.canva.com/MADQ5PeveDs/1/screen_2x/canva-galaxy-in-outter-space-MADQ5PeveDs.jpg' alt='space' />
    </div>
    <div className={s.decription}>
      <div className={s.avatar}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Y-GdHiZ402GuKd211B9oz-s4AdIdoEjKKw&usqp=CAU" alt="avatar" /></div>
      <section>
        <h2>Joan H.</h2>
        <p>Date of birth: <span>07/24/2033</span></p>
        <p>City: <span>Newest-York</span></p>
        <p>Education:  <span>Space Academy'53</span></p>
        <p>Web-site: <span>www.joan-h.com</span></p>
      </section>
    </div>
    <div className={s.myposts}>
      <h1>My posts</h1>
      <div>
        New post
      </div>
    </div>
    <div>
      <div>
        post 1
      </div>
      <div>
        post 2
      </div>
    </div>
  </main>;
}

export default Profile;