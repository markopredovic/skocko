import React from 'react';
import { parseSign } from '../../utility';
import GameIcon from '../Skocko/GameIcon';

const gameCurrent = ({game}) => {

    const currentTable = game.map(runda => {
        return (
            <div key={Math.round(Math.random() * 1000)}>
                <span><GameIcon icon={parseSign(runda[0])} /></span>
                <span><GameIcon icon={parseSign(runda[1])} /></span>
                <span><GameIcon icon={parseSign(runda[2])} /></span>
                <span><GameIcon icon={parseSign(runda[3])} /></span>
            </div>
        )
    })

    return (
        <div>
            {currentTable}
        </div>
    )
}

export default gameCurrent