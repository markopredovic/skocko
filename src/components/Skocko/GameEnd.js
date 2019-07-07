import React from "react";

const gameEnd = (props) => {
  return <div>
      <p>Game end</p>
      {props.is_success ? 'Congratulations!!!' : props.random}
        <button onClick={() => props.newGame()}>new game</button>
  </div>;
};

export default gameEnd