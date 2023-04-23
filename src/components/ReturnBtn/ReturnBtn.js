import { NavLink } from 'react-router-dom';
import s from './ReturnBtn.module.css';

export const ReturnBtn = ({ to }) => {
  return (
    <NavLink className={s.btnWrapper} to={to}>
      <button className={s.btn} type="button">
        Return
      </button>
    </NavLink>
  );
};
