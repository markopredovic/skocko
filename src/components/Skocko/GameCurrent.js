import React from 'react';
import { parseSign } from '../../utility'

const gameCurrent = ({game}) => {

    const currentTable = game.map(runda => {
        return (
            <div key={Math.round(Math.random() * 1000)}>
                <span>{parseSign(runda[0])}</span>&nbsp;
                <span>{parseSign(runda[1])}</span>&nbsp;
                <span>{parseSign(runda[2])}</span>&nbsp;
                <span>{parseSign(runda[3])}</span>&nbsp;
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