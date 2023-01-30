import PT from 'prop-types';
import css from '../Statistic/Statistic.module.css'

export const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul>
      <li className={css.item}>Good: {good}</li>
      <li className={css.item}>Neutral: {neutral}</li>
      <li className={css.item}>Bad: {bad}</li>
      <li className={css.item}>Total: {total}</li>
      <li className={css.item}>Positiv feedback: {positivePercentage}%</li>
    </ul>
  );
  };

  Statistic.propType = {
    good: PT.number.isRequired,
    neutral: PT.number.isRequired,
    bad: PT.number.isRequired,
    total: PT.number.isRequired,
    positivePercentage: PT.number.isRequired,
  }
