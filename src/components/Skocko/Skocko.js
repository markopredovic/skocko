import React, { Component } from 'react'
import Classes from './Skocko.module.css'
import GameCurrent from './GameCurrent'
import PlaySkocko from './PlaySkocko'
import GameResult from './GameResult'
import GameEnd from './GameEnd'
import { isNull } from 'util';

class Skocko extends Component {

    state = {
        game: [
           [null, null, null, null],
           [null, null, null, null],
           [null, null, null, null],
           [null, null, null, null],
           [null, null, null, null],
           [null, null, null, null]
        ],
        result_game: [
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null]
         ],
        randomCombination: [null, null, null, null],
        is_game_end: false,
        is_success: false
    }


    componentDidMount () {
        console.log('Component did mount');
        this.generateRandomCombination();
    }

    generateRandomCombination = () => {
        const customRandom = [0, 1, 2, 3].map(() => Math.round(Math.random() * 5 + 1));

        this.setState({randomCombination: customRandom})
    }

    submitRoundHandler = (combination) => {
        console.log(combination);

        this.updateGameTable(combination);
        this.updateResultTable(combination);
    }

    updateGameTable = (combination) => {
        console.log('update game table');

        let empty_round_finded = false;
        let is_game_end = false;

        const updatedGame = this.state.game.map(round => {
            if(this.isEmptyRound(round) && !empty_round_finded) {
                empty_round_finded = true;
                return combination;
            } else {
                return round
            }
        })

        // if 6 atempt then game is ended
        if(!isNull(updatedGame[5][0])) {
            is_game_end = true;
        }

        console.log('is_game_end', is_game_end);

        this.setState({game: updatedGame, is_game_end: is_game_end});
    }

    updateResultTable = (combination) => {
        console.log('Update result table')

        const score = this.calculateScore(combination);

        const is_success = this.isGameSuccess(score);

        let empty_round_finded = false;

        const updatedResult = this.state.result_game.map(round => {
            if(this.isEmptyRound(round) && !empty_round_finded) {
                empty_round_finded = true;
                return score;
            } else {
                return round
            }
        })

        let is_game_end = !isNull(updatedResult[5][0]) || is_success;

        this.setState({
            result_game: updatedResult,
            is_success,
            is_game_end
        });
    }

    isGameSuccess = (score) => {
        return score[0] === 'DA' && score[1] === 'DA' && score[2] === 'DA' && score[3] === 'DA';
    }

    isEmptyRound = (round) => {
        return isNull(round[0]);
    }

    calculateScore = (combination) => {

        let random_combination = [...this.state.randomCombination];
        let right_place = 0;
        let not_right_place = 0;

        let score = [];
        

        for(let i = 0; i <  4; i++) {
            if(combination[i] === random_combination[i]) {
                right_place++;
            }
        }

        combination.forEach(el => {
            const _index = random_combination.indexOf(el);

            if( _index !== -1 && (combination[_index] !== random_combination[_index])) {
                not_right_place++;
                random_combination[_index] = 999;
            }
        });

        for(let i = 0; i < right_place; i++) {
            score.push('DA');
        }

        for(let i = 0; i < not_right_place; i++) {
            score.push('NE');
        }

        for(let i = 0; i < 4 - (not_right_place + right_place); i++) {
            score.push('EMPTY');
        }

        return score;
 
    }

    newGame = () => {
        this.setState({
            game: [
                [null, null, null, null],
                [null, null, null, null],
                [null, null, null, null],
                [null, null, null, null],
                [null, null, null, null],
                [null, null, null, null]
             ],
             result_game: [
                 [null, null, null, null],
                 [null, null, null, null],
                 [null, null, null, null],
                 [null, null, null, null],
                 [null, null, null, null],
                 [null, null, null, null]
              ],
             randomCombination: [null, null, null, null],
             is_game_end: false,
             is_success: false
        })

        this.generateRandomCombination();
    }



    render() {

        return (
            <div className={Classes.lSkocko}>
                <div>
                    {this.state.is_game_end && (<GameEnd newGame={this.newGame} is_success={this.state.is_success} random={this.state.randomCombination}/>)}
                    </div>
                <div className={Classes.lTop}>
                    <div className={Classes.lCurrentTable}>
                        <GameCurrent game={this.state.game} />
                </div>
                    <div className={Classes.lResultTable}>
                        <GameResult result={this.state.result_game}/>
                </div>
                </div>
                <div className={Classes.lGameControls}>
                    <PlaySkocko submitRound={this.submitRoundHandler} isGameEnd={this.state.is_game_end}/>
                </div>

            </div>
        )
    }
}

export default Skocko