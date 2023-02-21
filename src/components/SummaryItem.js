import SummaryCard from "./SummaryCard";
import "./SummaryItem.css";

const SummaryItem = function (props) {
  const classes = `summary__item summary__item--${props.category.toLowerCase()}`;

  return (
    <SummaryCard className={classes}>
      <div className="summary__item--img">
        <img className="summary__item--icon" src={props.icon} alt=""></img>
        <p
          className={`summary__item--category summary__item--category-${props.category.toLowerCase()}`}
        >
          {props.category}
        </p>
      </div>
      <span className="summary__item--score">
        <span className="summary__item--score-current">{props.score}</span> /
        100
      </span>
    </SummaryCard>
  );
};

export default SummaryItem;
