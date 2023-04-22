import { useEffect, useState, useMemo } from 'react';
import storage from 'helpers/storage';
import Card from 'components/Card/Card';
import data from 'data/data.json';
import s from './CardList.module.css';
import DropDown from 'hooks/DropDown';
// import Button from 'components/Button/Button';

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

  const [sortDir, setSortDir] = useState('default');

  const sortedCards = useMemo(
    () =>
      [...users].sort((a, b) => {
        if (sortDir === 'follow') return a.price - b.price;
        else if (sortDir === 'followings') return b.price - a.price;
        else return a.id - b.id;
      }),
    [sortDir, users]
  );

  //   const [visible, setVisible] = useState(3);
  //
  //   const showMoreItems = () => {
  //     setVisible(prev => prev + 3);
  //   };

  return (
    // <>
    //   <ul className={s.list}>
    //     {users?.slice(0, visible).map(user => (
    //       <Card key={user.id} user={user} updateData={updateData} />
    //     ))}
    //   </ul>
    //   {visible < users?.length && <Button onClick={showMoreItems} />}
    // </>
    <>
      <DropDown setSortDir={setSortDir} />
      <ul className={s.list}>
        {sortedCards.map(user => (
          <Card key={user.id} user={user} updateData={updateData} />
        ))}
      </ul>
    </>
  );
};

export default CardList;
