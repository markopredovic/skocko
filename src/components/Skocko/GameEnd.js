import React from "react";
import GameIcon from "./GameIcon";

const gameEnd = props => {
  let report = "Cestitamo";

  if (!props.is_success) {
    report = props.random.map((sign, index) => (
      <GameIcon key={index} icon={sign} />
    ));
  }

  return (
    <div>
      <p>Kraj!!!</p>
      <div className="l-random-combination">{report}</div>
      <button className="btn btn-info" onClick={() => props.newGame()}>Nova igra</button>
    </div>
  );
};

export default gameEnd;
