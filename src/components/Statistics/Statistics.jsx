import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ total, positivePercentage, ...restStat }) => {
  return (
    <div>
      <h2 className={css.statistics}>Statistics</h2>
      <ul className={css.statisticsList}>
        {Object.keys(restStat).map(feedback => (
          <li key={feedback} className={css.statisticsListItem}>
            {feedback}: {restStat[feedback]}
          </li>
        ))}
      </ul>
      <div className={css.totalFeedback}>
        <p>Total: {total()}</p>
        <p>Positive feedback: {positivePercentage()}%</p>
      </div>
    </div>
  );
};

Statistics.propTypes = {
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
  restStat: PropTypes.arrayOf(PropTypes.shape),
};
export default Statistics;
