import { useState } from 'react';

import CardList from 'components/CardList/CardList';
import DropDown from 'hooks/DropDown';
import { ArrowToUp } from 'components/ArrowToUp/ArrowToUp';
import s from './Tweets.module.css';

export default function TweetsPage() {
  const [selectedValue, setSelectedValue] = useState('default');

  const handleChange = selectedValue => {
    setSelectedValue(selectedValue);
  };

  return (
    <div className={s.container}>
      <DropDown onChange={handleChange} />
      <CardList selectedValue={selectedValue} />
      <ArrowToUp />
    </div>
  );
}
