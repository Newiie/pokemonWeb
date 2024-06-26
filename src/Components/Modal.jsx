import { useState } from "react";
import cx from 'classnames';
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Modal({ handleSetDifficulty }) {
  const [activeDifficulty, setActiveDifficulty] = useState(""); 

  const handleDifficulty = (diff) => {
    setActiveDifficulty(diff); 
  };  

  return (
    <div className="modal">
      <p className="fw-bold">What would you like to do?</p>
      <ul>
        <li>
          <p
            className={cx("difficulty-item", { "difficult-active": activeDifficulty === "easy" })}
            onClick={() => handleDifficulty("easy")}
          >
            Easy
          </p>
        </li>
        <li>
          <p
            className={cx("difficulty-item", { "difficult-active": activeDifficulty === "medium" })}
            onClick={() => handleDifficulty("medium")}
          >
            Medium
          </p>
        </li>
        <li>
          <p
            className={cx("difficulty-item", { "difficult-active": activeDifficulty === "hard" })}
            onClick={() => handleDifficulty("hard")}
          >
            Hard
          </p>
        </li>
      </ul>
      <Link to="game" className="c-pointer" onClick={() => handleSetDifficulty(activeDifficulty)}>Start Game</Link>
      <h2>Github Repo</h2>
    </div>
  );
}

export default Modal;
