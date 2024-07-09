import css from "./Feedback.module.css";

const Feedback = ({ feedback, totalFeedback }) => {
  return (
    <section>
      <ul>
        <li>Good: {feedback.good}</li>
        <li>Neutral: {feedback.neutral}</li>
        <li>Bad: {feedback.bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>
          Positive:
          {Math.round(
            ((feedback.good + feedback.neutral) / totalFeedback) * 100
          )}
          %
        </li>
      </ul>
    </section>
  );
};

export default Feedback;
