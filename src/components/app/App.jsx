import { useState, useEffect } from 'react';
import Description from '../description/description';
import Feedback from '../feedback/feedback';
import Notification from '../notification/notfication';
import Options from '../options/options';

const getFeedback = () => {
  const savedFeedback = localStorage.getItem('feedback');
  return savedFeedback !== null ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
};

export default function App() {
  const [feedback, setFeedback] = useState(getFeedback());

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedbackPercentage = totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (type) => {
    setFeedback((prevFeedback) => ({ ...prevFeedback, [type]: prevFeedback[type] + 1 }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  }

  return (
    <div>
      <Description />
      <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} feedback={feedback} />
      {totalFeedback > 0 ? (
        <Feedback 
          feedback={feedback} 
          totalFeedback={totalFeedback} 
          positiveFeedbackPercentage={positiveFeedbackPercentage} 
        />
      ) : (
        <Notification message="No feedback given yet" />
      )}
    </div>
  );
}
