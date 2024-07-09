import { useState, useEffect } from "react";
import Description from "./description/Description";
import Feedback from "./feedback/Feedback";
import Options from "./options/Options";
import Notification from "./notification/Notification";
import css from "./App.module.css";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = JSON.parse(window.localStorage.getItem("feedback"));
    return savedFeedback
      ? savedFeedback
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        };
  });

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prev) => {
      return feedbackType
        ? { ...prev, [feedbackType]: prev[feedbackType] + 1 }
        : {
            good: 0,
            neutral: 0,
            bad: 0,
          };
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  return (
    <div className={css.app}>
      <Description
        name="Sip Happens Café"
        description="Please leave your feedback about our service by selecting one of the options below."
      />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? (
        <Feedback feedback={feedback} totalFeedback={totalFeedback} />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
