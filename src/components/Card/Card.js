import React, { useState } from 'react';
import pic from '../../images/pic.png';
import logo from '../../images/logo.png';
import s from './Card.module.css';

const Card = ({ user, updateData }) => {
  const [followers, setFollowers] = useState(user.followers);
  const [isFollowing, setIsFollowing] = useState(user.isFollowing);

  const onClickBtn = () => {
    const newIsFollowing = !isFollowing;
    setIsFollowing(newIsFollowing);

    if (newIsFollowing) {
      setFollowers(followers + 1);
      updateData(user.id, followers + 1, newIsFollowing);
    } else {
      setFollowers(followers - 1);
      updateData(user.id, followers - 1, newIsFollowing);
    }
  };

  return (
    <li className={s.item}>
      <img className={s.logo} src={logo} alt="avatar" loading="lazy" />
      <img className={s.pic} src={pic} alt="avatar" loading="lazy" />
      <img
        className={s.avatar}
        src={user.avatar}
        width="62"
        height="62"
        alt="avatar"
        loading="lazy"
      />
      <p className={s.tweets}>{user.tweets}&nbsp;Tweets</p>
      <p className={s.followers}>
        {new Intl.NumberFormat('en-US').format(followers)}&nbsp;Followers
      </p>
      <button
        type="button"
        onClick={onClickBtn}
        className={isFollowing ? 'active' : 'passive'}
      >
        {isFollowing ? 'following' : 'follow'}
      </button>
    </li>
  );
};

export default Card;
