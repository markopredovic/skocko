import React from 'react';
import skockoIcon from '../../assets/images/icon-skocko.png';
import starIcon from '../../assets/images/icon-zvezda.png';
import srceIcon from '../../assets/images/icon-srce.png';
import karoIcon from '../../assets/images/icon-karo.png';
import pikIcon from '../../assets/images/icon-pik.png';
import trefIcon from '../../assets/images/icon-tref.png';

const GameIcon = ({icon}) => {
    let gameIcon = null;
    
    if (icon === 0) { 
        gameIcon = <span className="empty-field table-field"></span>; 
    } else if (icon === 1) {
        gameIcon =  <span className="table-field"><img src={srceIcon} alt=""/></span>;
    } else if (icon === 2) {
        gameIcon =  <span className="table-field"><img src={karoIcon} alt=""/></span>;
    } else if (icon === 3) {
        gameIcon =  <span className="table-field"><img src={pikIcon} alt=""/></span>;
    } else if (icon === 4) {
        gameIcon =  <span className="table-field"><img src={trefIcon} alt=""/></span>;
    } else if (icon === 5) {
        gameIcon =  <span className="table-field"><img src={skockoIcon} alt=""/></span>;
    } else if (icon === 'DA') {
        gameIcon =  <span className="table-field success"><span></span></span>;
    } else if (icon === 'NE') {
        gameIcon =  <span className="table-field false"><span></span></span>;
    } else if (icon === 'EMPTY') {
        gameIcon =  <span className="table-field empty"></span>;
    } else if (icon === 6) {
        gameIcon =  <span className="table-field"><img src={starIcon} alt=""/></span>;
    } else {
        gameIcon =  null;
    }

    return (
        <>
            {gameIcon}
        </>
    )
}

export default GameIcon