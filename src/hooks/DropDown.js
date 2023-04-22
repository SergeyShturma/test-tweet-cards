import s from './DropDown.module.css';

const DropDown = ({ setSortDir }) => (
  <div className={s.dropdown_wrapper}>
    <select
      className={s.dropdown_select}
      onChange={e => setSortDir(e.target.value)}
    >
      <option value="default">show all </option>
      <option value="follow">follow </option>
      <option value="followings">followings </option>
    </select>
  </div>
);

export default DropDown;
