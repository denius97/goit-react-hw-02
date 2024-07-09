import css from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback }) => {
  return (
    <section className={css.options}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback > 0 && (
        <button className={css.resetBtn} onClick={() => updateFeedback()}>
          Reset
        </button>
      )}
    </section>
  );
};

export default Options;
