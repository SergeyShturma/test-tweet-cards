import CardList from 'components/CardList/CardList';
import s from './App.module.css';

export const App = () => {
  return (
    <div className={s.container}>
      <CardList />
    </div>
  );
};
