import { useEffect, useState } from 'react';

import Card from 'components/Card/Card';
import s from './CardList.module.css';
import { getUsers, upFollowers, downFollowers } from 'helpers/api';

const CardList = ({ selectedValue }) => {
  const [users, setUsers] = useState([]);
  const [idx, setIdx] = useState(3);
  const [followedUsersIds, setFollowedUsersIds] = useState(
    JSON.parse(localStorage.getItem('followedUsersIds')) || []
  );
  const [selectedUsers, setSelectedUsers] = useState([]);

  useEffect(() => {
    async function fetch() {
      try {
        const users = await getUsers();
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, []);

  useEffect(() => {
    if (selectedValue === 'default') {
      setSelectedUsers(users);
    } else if (selectedValue === 'following') {
      const filteredUsers = users.filter(user =>
        followedUsersIds.includes(user.id)
      );
      setSelectedUsers(filteredUsers);
    } else if (selectedValue === 'follow') {
      const filteredUsers = users.filter(
        user => !followedUsersIds.includes(user.id)
      );
      setSelectedUsers(filteredUsers);
    }
  }, [selectedValue, users, followedUsersIds]);

  const shownUsers = selectedUsers.slice(0, idx);

  function loadMore() {
    setIdx(idx + 3);
  }

  function followUser(user) {
    const updatedFollowedUsers = [...followedUsersIds, user.id];
    setFollowedUsersIds(updatedFollowedUsers);
    localStorage.setItem(
      'followedUsersIds',
      JSON.stringify(updatedFollowedUsers)
    );
    async function increase(user) {
      try {
        const updatedUser = await upFollowers(user);
        updateUser(updatedUser.id, { followers: updatedUser.followers });
      } catch (error) {
        console.log(error);
      }
    }
    increase(user);
  }

  function unfollowUser(user) {
    const updatedFollowedUsers = followedUsersIds.filter(id => id !== user.id);
    setFollowedUsersIds(updatedFollowedUsers);
    localStorage.setItem(
      'followedUsersIds',
      JSON.stringify(updatedFollowedUsers)
    );
    async function decrease(user) {
      try {
        const updatedUser = await downFollowers(user);
        updateUser(updatedUser.id, { followers: updatedUser.followers });
      } catch (error) {
        console.log(error);
      }
    }
    decrease(user);
  }

  function updateUser(id, newProps) {
    setUsers(users => {
      return users.map(user => {
        if (user.id === id) {
          return { ...user, ...newProps };
        } else {
          return user;
        }
      });
    });
  }

  return (
    <>
      {selectedUsers.length ? (
        <ul className={s.list}>
          {shownUsers.map(user => (
            <Card
              key={user.id}
              user={user}
              follow={followUser}
              unfollow={unfollowUser}
              followedUsers={followedUsersIds}
            />
          ))}
        </ul>
      ) : (
        <>
          <p className={s.title}>Emptiness...</p>
          <iframe
            title="Funny"
            className={s.gif}
            src="https://giphy.com/embed/U7Jrpeu6q78XSZZAPT"
            alt="gif"
          ></iframe>
        </>
      )}
      {shownUsers.length < selectedUsers?.length && (
        <button type="button" className={s.button} onClick={loadMore}>
          Load More
        </button>
      )}
    </>
  );
};

export default CardList;
