import React from 'react';

export default function Feedback({ feedback }) {
    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    const positiveFeedbacks = totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;
  
    return (
      <div>
        <h2>Feedback Statistics</h2>
        <p>Good: {feedback.good}</p>
        <p>Neutral: {feedback.neutral}</p>
        <p>Bad: {feedback.bad}</p>
        <p>Total feedback: {totalFeedback}</p>
        <p>Positive feedback: {positiveFeedbacks}%</p>
      </div>
    );
  };