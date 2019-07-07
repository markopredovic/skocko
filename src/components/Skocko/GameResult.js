import React from 'react';
import { parseSign } from '../../utility'

const gameResult = ({result}) => {

    const resultTable = result.map(runda => {
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
            {resultTable}
        </div>
    )
}

export default gameResult