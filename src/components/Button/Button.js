import s from './Button.module.css';
import PropTypes from 'prop-types';

export default function Button({ showMoreItems }) {
  return (
    <button type="button" className={s.button} onClick={showMoreItems}>
      Load More
    </button>
  );
}

Button.propTypes = {
  showMoreItems: PropTypes.func.isRequired,
};
