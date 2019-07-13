import React from "react";
import GameIcon from './GameIcon';

const gameEnd = props => {

  const btnStyle = {
    padding: '0 20px',
    fontSize: '18px',
    fontWeight: '700',
    color: 'white',
    backgroundColor: '#66fcf1',
    border: 'none',
    height: '40px',
    lineHeight: '40px',
    borderRadius: '4px'
}

  let report = "Cestitamo";

  if(!props.is_success) {
    report = props.random.map((sign, index) => <span key={index} style={{display: 'inline-block', marginRight: '7px'}}><GameIcon icon={sign} /></span>);
  }

  return (
    <div style={{textAlign: 'left'}}>
      <p>Kraj!!!</p>
      <p>{report}</p>
      <button style={btnStyle} onClick={() => props.newGame()}>Nova igra</button>
    </div>
  );
};

export default gameEnd;
