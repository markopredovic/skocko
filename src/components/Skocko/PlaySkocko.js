import React, { Component } from 'react';
import { isNull } from 'util';

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
            <div>
                <div>
                    Your current combination: 
                    <span>{this.state.currentCombination[0]}</span>
                    <span>{this.state.currentCombination[1]}</span>
                    <span>{this.state.currentCombination[2]}</span>
                    <span>{this.state.currentCombination[3]}</span>
                </div>
                <div>
                    Choose Skocko Sign:
                    <div>
                        <button onClick={() => this.addSignHandler(1)} disabled={this.state.disabled || this.props.isGameEnd}>1</button>
                        <button onClick={() => this.addSignHandler(2)} disabled={this.state.disabled || this.props.isGameEnd}>2</button>
                        <button onClick={() => this.addSignHandler(3)} disabled={this.state.disabled || this.props.isGameEnd}>3</button>
                        <button onClick={() => this.addSignHandler(4)} disabled={this.state.disabled || this.props.isGameEnd}>4</button>
                        <button onClick={() => this.addSignHandler(5)} disabled={this.state.disabled || this.props.isGameEnd}>5</button>
                        <button onClick={() => this.addSignHandler(6)} disabled={this.state.disabled || this.props.isGameEnd}>6</button>
                    </div>
                </div>
                <div>
                    Submit combination: <button onClick={this.submitCombination} disabled={!this.state.disabled  || this.props.isGameEnd}>Submit</button>
                </div>
                <div>
                    Clear combination: <button onClick={this.clearCombination} disabled={ this.props.isGameEnd}>Clear</button>
                </div>
            </div>
        )
    }

}

export default PlaySkocko