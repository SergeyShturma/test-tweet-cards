import CardList from 'components/CardList/CardList';
import DropDown from 'hooks/DropDown';
import { ArrowToUp } from 'components/ArrowToUp/ArrowToUp';
import s from './Tweets.module.css';

export default function TweetsPage() {
  return (
    <div className={s.container}>
      <DropDown />
      <CardList />
      <ArrowToUp />
    </div>
  );
}
