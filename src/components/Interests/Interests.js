import "./Interests.css";
import { memo } from "react";

const Interests = memo(function Interests() {
  return (
    <div className="interests">
      <h2 className="interestsHeading">Interests</h2>
      <p className="interestsPara">
        Table Tennis, Car Driving, Chess, Recursive Googling
      </p>
    </div>
  );
});

export default Interests;
