import React from 'react';

export default function Feedback({ feedback, totalFeedback, positiveFeedbackPercentage }) {
  return (
    <div className='css.buttons'>
      <h2>Feedback Statistics</h2>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total feedback: {totalFeedback}</p>
      <p>Positive feedback: {positiveFeedbackPercentage}%</p>
    </div>
  );
}

