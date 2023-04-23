import CardList from 'components/CardList/CardList';
import { ReturnBtn } from 'components/ReturnBtn/ReturnBtn';
import DropDown from 'hooks/DropDown';
import s from './Tweets.module.css';
import { ArrowToUp } from 'components/ArrowToUp/ArrowToUp';

export default function TweetsPage() {
  return (
    <div className={s.container}>
      <ReturnBtn to={'/'} />
      <DropDown />
      <CardList />
      <ArrowToUp />
    </div>
  );
}
