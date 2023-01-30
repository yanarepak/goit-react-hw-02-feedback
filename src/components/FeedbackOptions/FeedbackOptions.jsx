import PT from 'prop-types';
import css from '../FeedbackOptions/FeedbackOptions.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.btnList}>
      {options.map((option, index) => (
        <li key={index}>
          <button className={css.btn} type="button" onClick={() => onLeaveFeedback(option)}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PT.func.isRequired,
  options: PT.arrayOf(PT.string).isRequired,
};
