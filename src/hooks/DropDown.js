import s from './DropDown.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/filterSlice';

const DropDown = () => {
  const dispatch = useDispatch();

  const onFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={s.dropdown_wrapper}>
      <select className={s.dropdown_select} onChange={e => onFilterChange(e)}>
        <option value="default">show all </option>
        <option value="follow">follow </option>
        <option value="followings">followings </option>
      </select>
    </div>
  );
};

export default DropDown;
