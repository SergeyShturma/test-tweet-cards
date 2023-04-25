import pic from '../../images/pic.png';
import logo from '../../images/logo.png';
import s from './Card.module.css';

const Card = ({ user, follow, unfollow, followedUsers }) => {
  return (
    <li className={s.item}>
      <img className={s.logo} src={logo} alt="avatar" loading="lazy" />
      <img className={s.pic} src={pic} alt="avatar" loading="lazy" />
      <img
        className={s.avatar}
        src={user.avatar}
        alt={user.name}
        width="62"
        height="62"
        loading="lazy"
      />
      <p className={s.tweets}>{user.tweets}&nbsp;Tweets</p>
      <p className={s.followers}>
        {new Intl.NumberFormat('en-US').format(user.followers)}&nbsp;Followers
      </p>
      {followedUsers.includes(user.id) ? (
        <button
          type="button"
          className={'active'}
          onClick={() => unfollow(user)}
          user={user}
        >
          following
        </button>
      ) : (
        <button
          type="button"
          className={'passive'}
          onClick={() => follow(user)}
          user={user}
        >
          follow
        </button>
      )}
    </li>
  );
};

export default Card;
