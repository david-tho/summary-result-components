import "./SummaryCard.css";

const SummaryCard = function (props) {
  const classes = `card ${props.className}`;

  return <div className={classes}>{props.children}</div>;
};

export default SummaryCard;
