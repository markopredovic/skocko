import React, { Component } from 'react';
import { isNull } from 'util';
import GameIcon from '../../components/Skocko/GameIcon';
import { parseSign } from '../../utility'

class PlaySkocko extends Component {

    state = {
        currentCombination: [null, null, null, null],
        disabled: false
    }

    addSignHandler = (sign) => {
        let updated = this.state.currentCombination;

        const _index = updated.findIndex(el => isNull(el))

        updated[_index] = sign;

        const disabledUpdated = !isNull(updated[0]) && !isNull(updated[1]) && !isNull(updated[2]) && !isNull(updated[3]);

        this.setState({
            currentCombination: updated,
            disabled: disabledUpdated
        })
    }

    clearCombination = () => {
        this.setState({
            currentCombination: [null, null, null, null],
            disabled: false
        })
    }

    submitCombination = () => {
        this.props.submitRound(this.state.currentCombination);
        this.resetState();
    }

    resetState = () => {
        this.setState({
            currentCombination: [null, null, null, null],
            disabled: false
        })
    }

    render() {
        return (
            <div className="l-skocko-controls-wrapper">
                <div className="l-current-combination">
                    <GameIcon icon={parseSign(this.state.currentCombination[0])} />
                    <GameIcon icon={parseSign(this.state.currentCombination[1])} />
                    <GameIcon icon={parseSign(this.state.currentCombination[2])} />
                    <GameIcon icon={parseSign(this.state.currentCombination[3])} />
                </div>
                <p>Izaberi kombinaciju:</p>
                <div className="l-controls-buttons">
                        <button onClick={() => this.addSignHandler(1)} disabled={this.state.disabled || this.props.isGameEnd}><GameIcon icon={1} /></button>
                        <button onClick={() => this.addSignHandler(2)} disabled={this.state.disabled || this.props.isGameEnd}><GameIcon icon={2} /></button>
                        <button onClick={() => this.addSignHandler(3)} disabled={this.state.disabled || this.props.isGameEnd}><GameIcon icon={3} /></button>
                        <button onClick={() => this.addSignHandler(4)} disabled={this.state.disabled || this.props.isGameEnd}><GameIcon icon={4} /></button>
                        <button onClick={() => this.addSignHandler(5)} disabled={this.state.disabled || this.props.isGameEnd}><GameIcon icon={5} /></button>
                        <button onClick={() => this.addSignHandler(6)} disabled={this.state.disabled || this.props.isGameEnd}><GameIcon icon={6} /></button>
                    </div>
                <div className="l-actions">
                    <button className="btn btn-success" onClick={this.submitCombination} disabled={!this.state.disabled  || this.props.isGameEnd}>Potvrdi</button>
                    <button className="btn btn-danger" onClick={this.clearCombination} disabled={ this.props.isGameEnd}>Obrisi</button>
                </div>
            </div>
        )
    }

}

export default PlaySkocko