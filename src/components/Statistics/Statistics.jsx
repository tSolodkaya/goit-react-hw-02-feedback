import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import Notification from 'components/Notification/Notification';

const Statistics = ({ total, positivePercentage, ...restStat }) => {
  const statisticsOptions = Object.keys(restStat);
  const positiveFeedback = positivePercentage();
  const totalFeedback = total();
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
      {totalFeedback > 0 ? (
        <div className={css.totalFeedback}>
          <p>Total: {totalFeedback}</p>
          <p>Positive feedback: {positiveFeedback}%</p>
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
