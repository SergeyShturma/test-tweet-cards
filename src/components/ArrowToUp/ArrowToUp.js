import ScrollToTop from 'react-scroll-up';
import { BsArrowUpCircle } from 'react-icons/bs';

import s from './ArrowToUp.module.css';

export const ArrowToUp = () => {
  return (
    <ScrollToTop className={s.btnToUp} showUnder={160}>
      <BsArrowUpCircle className={s.iconToUp} />
    </ScrollToTop>
  );
};
