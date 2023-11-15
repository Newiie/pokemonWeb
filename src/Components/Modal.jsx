import { useState } from "react";
import cx from 'classnames';

// eslint-disable-next-line react/prop-types
function Modal({ handleSetDifficulty }) {
  const [activeDifficulty, setActiveDifficulty] = useState(""); // State to track the active difficulty 

  const handleDifficulty = (diff) => {
    setActiveDifficulty(diff); // Set the active difficulty
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
      <h2 className="c-pointer" onClick={() => handleSetDifficulty(activeDifficulty)}>Start Game</h2>
      <h2>Github Repo</h2>
    </div>
  );
}

export default Modal;
