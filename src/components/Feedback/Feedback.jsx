import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import css from 'components/Feedback/Feedback.module.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbacks = Object.keys(this.state);

  decreseStatistic = event => {
    const feedbackName = event.target.name;
    this.setState(prevState => ({
      [feedbackName]: prevState[feedbackName] + 1,
    }));
  };
  countTotalFeedback = () => {
    const allFeedbackQuantity = Object.values(this.state);
    return allFeedbackQuantity.reduce((total, item) => total + item, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const isFeadback = this.countTotalFeedback();
    return isFeadback ? ((this.state.good * 100) / isFeadback).toFixed() : 0;
  };
  render() {
    return (
      <div className={css.feedbackCard}>
        <h1 className={css.feedBackTitle}>Please, leave feedback</h1>
        <div>
          {this.feedbacks.map(feedback => (
            <button
              className={css.feedbackBtn}
              key={feedback}
              type="button"
              name={feedback}
              onClick={this.decreseStatistic}
            >
              {feedback}
            </button>
          ))}
        </div>
        <h2 className={css.statistics}>Statistics</h2>
        <ul className={css.statisticsList}>
          {this.feedbacks.map(feedback => (
            <li key={feedback} className={css.statisticsListItem}>
              {feedback}: {this.state[feedback]}
            </li>
          ))}
        </ul>
        <div className={css.totalFeedback}>
          <p>Total: {this.countTotalFeedback()}</p>
          <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
        </div>
      </div>
    );
  }
}

export default Feedback;
