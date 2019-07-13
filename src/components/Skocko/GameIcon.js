import React from 'react';
import skockoIcon from '../../assets/images/skocko-skocko.png';
import starIcon from '../../assets/images/skocko-zvezda.png';
import srceIcon from '../../assets/images/skocko-srce.png';
import karoIcon from '../../assets/images/skocko-karo.png';
import pikIcon from '../../assets/images/skocko-pik.png';
import trefIcon from '../../assets/images/skocko-tref.png';
import { blockStatement } from '@babel/types';

const GameIcon = ({icon}) => {
    let gameIcon = null;

    const emptyField = {
        display: 'inline-block',
        width: '30px',
        height: '30px'
    }

    const hit = {
        display: 'inline-block',
        width: '30px',
        height: '30px',
        backgroundColor: 'red',
        borderRadius: '30px'
    }

    const missed = {
        display: 'inline-block',
        width: '30px',
        height: '30px',
        backgroundColor: 'yellow',
        borderRadius: '30px'
    }

    const empty = {
        display: 'inline-block',
        width: '30px',
        height: '30px',
        backgroundColor: 'unset'
    }

    const imgStyle = {
        display: 'block',
        height: '30px',
        width: 'auto'
    }
    
    if (icon === 0) { 
        gameIcon = null; 
    } else if (icon === 1) {
        gameIcon =  <img src={srceIcon} style={imgStyle}/>;
    } else if (icon === 2) {
        gameIcon =  <img src={karoIcon} style={imgStyle} />;
    } else if (icon === 3) {
        gameIcon =  <img src={pikIcon} style={imgStyle}/>;
    } else if (icon === 4) {
        gameIcon =  <img src={trefIcon} style={imgStyle}/>;
    } else if (icon === 5) {
        gameIcon =  <img src={skockoIcon} style={imgStyle} />;
    } else if (icon === 'DA') {
        gameIcon =  <span style={ hit }></span>;
    } else if (icon === 'NE') {
        gameIcon =  <span style={ missed }></span>;
    } else if (icon === 'EMPTY') {
        gameIcon =  <span style={ empty }></span>;
    } else if (icon === 6) {
        gameIcon =  <img src={starIcon} style={imgStyle} />;
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