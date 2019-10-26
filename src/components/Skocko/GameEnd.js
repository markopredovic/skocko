import React from "react";
import GameIcon from "./GameIcon";

const gameEnd = props => {
  const lang = props.lang;
  let report = lang === 'sr' ? 'Cestitamo' : 'Congratulations';

  if (!props.is_success) {
    report = props.random.map((sign, index) => (
      <GameIcon key={index} icon={sign} />
    ));
  }

  return (
    <div>
      <p>{lang === "sr" ? "Kraj!!!" : "Game End!!!"}</p>
      <div className="l-random-combination">{report}</div>
      <button className="btn btn-info" onClick={() => props.newGame()}>
        {lang === "sr" ? "Nova igra" : "New Game"}
      </button>
    </div>
  );
};

export default gameEnd;
