import { useEffect, useState } from 'react';

import storage from 'helpers/storage';
import Card from 'components/Card/Card';
import data from 'data/data.json';
import s from './CardList.module.css';

const CardList = () => {
  const [users, setUsers] = useState(storage.load('users-list') ?? data);

  useEffect(() => {
    storage.save('users-list', users);
  }, [users]);

  const updateData = (id, followers, isFollow) => {
    const updateUsers = users.map(user => {
      if (user.id === id) {
        user.followers = followers;
        user.isFollowing = isFollow;
      }
      return user;
    });
    setUsers(updateUsers);
  };

  const [visible, setVisible] = useState(3);

  const showMoreItems = prev => {
    setVisible(prev + 3);
  };

  return (
    <>
      <ul className={s.list}>
        {users?.slice(0, visible).map(user => (
          <Card key={user.id} user={user} updateData={updateData} />
        ))}
      </ul>
      {visible < users?.length && (
        <button
          type="button"
          className={s.button}
          onClick={() => showMoreItems(visible)}
        >
          Load More
        </button>
      )}
    </>
  );
};

export default CardList;
