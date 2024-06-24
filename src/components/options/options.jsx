import css from './options.module.css'


export default function Options({ updateFeedback, resetFeedback, feedback }) {
  return (
    <div className={css.buttons}>
      <button onClick={() => updateFeedback('good')}>Good</button>
      <button onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button onClick={() => updateFeedback('bad')}>Bad</button>
      {feedback.good + feedback.neutral + feedback.bad > 0 && <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
}