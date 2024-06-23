import { useState, useEffect } from 'react';
import Feedback from '../feedback/feedback';
import Notification from '../notification/notfication';
import Options from '../options/options';

const getFeedback = () => {
  const savedFeedback = localStorage.getItem('feedback');
  return savedFeedback !== null ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
};

export default function App() {
  const [feedback, setFeedback] = useState(getFeedback());
  const [totalFeedback, setTotalFeedback] = useState(0);

  useEffect(() => {
    const total = feedback.good + feedback.neutral + feedback.bad;
    setTotalFeedback(total);
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>
      <Options feedback={feedback} setFeedback={setFeedback} resetFeedback={resetFeedback} />
      {totalFeedback > 0 ? (
        <Feedback feedback={feedback} />
      ) : (
        <Notification message="No feedback given yet" />
      )};
    </div>
  );
};
