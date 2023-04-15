import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import Notification from 'components/Notification/Notification';

const Statistics = ({ total, positivePercentage, ...restStat }) => {
  const statisticsOptions = Object.keys(restStat);
  return (
    <div>
      <h2 className={css.statistics}>Statistics</h2>
      <ul className={css.statisticsList}>
        {statisticsOptions.map(feedback => (
          <li key={feedback} className={css.statisticsListItem}>
            {feedback}: {restStat[feedback]}
          </li>
        ))}
      </ul>
      {total() > 0 ? (
        <div className={css.totalFeedback}>
          <p>Total: {total()}</p>
          <p>Positive feedback: {positivePercentage()}%</p>
        </div>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};

Statistics.propTypes = {
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
  restStat: PropTypes.arrayOf(PropTypes.shape),
};
export default Statistics;
