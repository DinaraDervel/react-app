import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.post}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA4LPcMraeZ1ra8qRl1m2IacMAbIAxBUVlzQ&usqp=CAU" alt="small_avatar" />
          <p>Sweet! So, what do you wanna do today?</p>
        </div>
          );
}

export default Post;