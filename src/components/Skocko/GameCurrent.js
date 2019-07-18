import React from 'react';
import { parseSign } from '../../utility';
import GameIcon from '../Skocko/GameIcon';

const gameCurrent = ({game}) => {

    const gameTable = game.map((row, index) => {
        return (
            <div key={index}>
                <GameIcon icon={parseSign(row[0])} />
                <GameIcon icon={parseSign(row[1])} />
                <GameIcon icon={parseSign(row[2])} />
                <GameIcon icon={parseSign(row[3])} />
            </div>
        )
    })

    return (
        <div className="skocko-table game">
            {gameTable}
        </div>
    )
}

export default gameCurrent