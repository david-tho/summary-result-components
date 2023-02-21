import SummaryCard from "./SummaryCard";
import SummaryItem from "./SummaryItem";
import SummaryBoard from "./SummaryBoard";
import "./Summary.css";

const Summary = function (props) {
  return (
    <SummaryCard className="summary">
      <SummaryBoard></SummaryBoard>
      <div className="summary__box">
        <h2 className="summary__title">Summary</h2>

        <div className="summary__components">
          {props.items.map((item, i) => {
            return (
              <SummaryItem
                key={i}
                category={item.category}
                score={item.score}
                icon={item.icon}
              />
            );
          })}
        </div>

        <button className="summary__btn">Continue</button>
      </div>
    </SummaryCard>
  );
};

export default Summary;
