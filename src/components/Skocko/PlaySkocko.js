import React, { Component } from 'react';
import { isNull } from 'util';
import GameIcon from '../../components/Skocko/GameIcon';
import { POINT_CONVERSION_COMPRESSED } from 'constants';

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

        const btnPrimaryStyle = {
            marginRight: '20px',
            padding: '0 20px',
            fontSize: '18px',
            fontWeight: '700',
            color: 'white',
            backgroundColor: '#afd275',
            border: 'none',
            height: '40px',
            lineHeight: '40px',
            borderRadius: '4px'
        }

        const btnSecondaryStyle = {
            padding: '0 20px',
            fontSize: '18px',
            fontWeight: '700',
            color: 'white',
            backgroundColor: '#e7717d',
            border: 'none',
            height: '40px',
            lineHeight: '40px',
            borderRadius: '4px'
        }

        const btnActionDefault = {
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '50px',
            height: '50px',
            marginRight: '10px',
            backgroundColor: 'unset',
            border: '2px solid',
            borderRadius: '4px'
        }

        return (
            <div>
                <div style={{minHeight: '50px', display: 'inline-flex', alignItems: 'center'}}>
                    <span style={{marginRight: '20px'}}>Tvoja trenutna kombinacija:</span> 
                    <span style={{marginRight: '10px'}}><GameIcon icon={this.state.currentCombination[0]} /></span>
                    <span style={{marginRight: '10px'}}><GameIcon icon={this.state.currentCombination[1]} /></span>
                    <span style={{marginRight: '10px'}}><GameIcon icon={this.state.currentCombination[2]} /></span>
                    <span style={{marginRight: '10px'}}><GameIcon icon={this.state.currentCombination[3]} /></span>
                </div>
                <div style={{marginBottom: '20px'}}>
                    <span style={{display: 'inline-block', marginBottom: '10px'}}>Izaberi kombinaciju:</span>    
                    <div>
                        <button style={btnActionDefault} onClick={() => this.addSignHandler(1)} disabled={this.state.disabled || this.props.isGameEnd}><GameIcon icon={1} /></button>
                        <button style={btnActionDefault} onClick={() => this.addSignHandler(2)} disabled={this.state.disabled || this.props.isGameEnd}><GameIcon icon={2} /></button>
                        <button style={btnActionDefault} onClick={() => this.addSignHandler(3)} disabled={this.state.disabled || this.props.isGameEnd}><GameIcon icon={3} /></button>
                        <button style={btnActionDefault} onClick={() => this.addSignHandler(4)} disabled={this.state.disabled || this.props.isGameEnd}><GameIcon icon={4} /></button>
                        <button style={btnActionDefault} onClick={() => this.addSignHandler(5)} disabled={this.state.disabled || this.props.isGameEnd}><GameIcon icon={5} /></button>
                        <button style={btnActionDefault} onClick={() => this.addSignHandler(6)} disabled={this.state.disabled || this.props.isGameEnd}><GameIcon icon={6} /></button>
                    </div>
                </div>
                <div  style={{display: 'inline-flex', alignItems: 'center'}}>
                    <button style={btnPrimaryStyle} onClick={this.submitCombination} disabled={!this.state.disabled  || this.props.isGameEnd}>Potvrdi</button>
                    <button style={btnSecondaryStyle} onClick={this.clearCombination} disabled={ this.props.isGameEnd}>Obrisi</button>
                </div>

            </div>
        )
    }

}

export default PlaySkocko