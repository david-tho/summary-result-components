import "./SummaryBoard.css";

const SummaryBoard = function (props) {
  return (
    <div className="summary__board">
      <h2 className="summary__board--title">Your Result</h2>
      <div className="summary__board--score">
        <h1 className="summary__board--number">79</h1>
        <p className="summary__board--maximum">of 100</p>
      </div>
      <h2 className="summary__board--title">Great</h2>
      <p className="summary__board--text">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
};

export default SummaryBoard;
