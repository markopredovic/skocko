import React, { Component } from "react";
import "../../styles/styles.scss";
import Select from "react-select";
import GameCurrent from "./GameCurrent";
import PlaySkocko from "./PlaySkocko";
import GameResult from "./GameResult";
import GameEnd from "./GameEnd";
import SkockoTime from "./SkockoTime";
import ModalGuide from "./ModalGuide/ModalGuide";
import ModalContent from "./ModalContent";
import BackDrop from "./BackDrop/BackDrop";
import { isNull } from "util";

/*
  Data flow:

  game table
  result table
  random combination: generate
  current combination: submit
  update game, result, success, end

*/

class Skocko extends Component {
  state = {
    lang: { value: "sr", label: "Srpski" },
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
    currentCombination: [null, null, null, null],
    is_game_end: false,
    is_success: false,
    showModalGuide: false,
    is_game_started: false,
    is_game_paused: false,
    time: 0
  };

  componentDidMount() {
    this.generateRandomCombination();
  }

  generateRandomCombination = () => {
    const customRandom = [0, 1, 2, 3].map(() =>
      Math.round(Math.random() * 5 + 1)
    );

    this.setState({ randomCombination: customRandom });
  };

  submitRoundHandler = combination => {
    console.log(combination);

    this.updateGameTable(combination);
    this.updateResultTable(combination);
  };

  updateGameTable = combination => {
    console.log("update game table");

    let empty_round_finded = false;
    let is_game_end = false;

    const updatedGame = this.state.game.map(round => {
      if (this.isEmptyRound(round) && !empty_round_finded) {
        empty_round_finded = true;
        return combination;
      } else {
        return round;
      }
    });

    // if 6 atempt then game is ended
    if (!isNull(updatedGame[5][0])) {
      is_game_end = true;
    }

    this.setState(() => {
      return {
        game: updatedGame,
        is_game_end: is_game_end
      };
    });
  };

  updateResultTable = combination => {
    console.log("Update result table");

    const score = this.calculateScore(combination);

    const is_success = this.isGameSuccess(score);

    let empty_round_finded = false;

    const updatedResult = this.state.result_game.map(round => {
      if (this.isEmptyRound(round) && !empty_round_finded) {
        empty_round_finded = true;
        return score;
      } else {
        return round;
      }
    });

    let is_game_end = !isNull(updatedResult[5][0]) || is_success;

    this.setState({
      result_game: updatedResult,
      is_success,
      is_game_end
    });
  };

  isGameSuccess = score => {
    return (
      score[0] === "DA" &&
      score[1] === "DA" &&
      score[2] === "DA" &&
      score[3] === "DA"
    );
  };

  isEmptyRound = round => {
    return isNull(round[0]);
  };

  calculateScore = combination => {
    const getCount = (i, combination, random_combination) => {
      const _random_count = random_combination.reduce((a, b) => {
        if (b === i) {
          return a + 1;
        } else return a;
      }, 0);

      const _current_count = combination.reduce((a, b) => {
        if (b === i) {
          return a + 1;
        } else return a;
      }, 0);

      return Math.min(_random_count, _current_count);
    };

    const getRightCount = (i, combination, random_combination) => {
      return random_combination.reduce((a, b, index) => {
        if (combination[index] === b && b === i) {
          return a + 1;
        } else return a;
      }, 0);
    };

    const calculateSign = (i, combination, random_combination) => {
      const _total_count = getCount(i, combination, random_combination);
      const _on_right_place = getRightCount(i, combination, random_combination);

      return {
        right_place: _on_right_place,
        not_right_place: _total_count - _on_right_place
      };
    };

    let random_combination = [...this.state.randomCombination];

    let result = {
      right_place: 0,
      not_right_place: 0
    };

    let score = [];

    for (let i = 1; i <= 6; i++) {
      if (combination.indexOf(i) !== -1) {
        let step_result = calculateSign(i, combination, random_combination);
        console.log(step_result);

        result.right_place = result.right_place + step_result.right_place;
        result.not_right_place =
          result.not_right_place + step_result.not_right_place;
      }
    }

    console.log("Result: ", result);

    for (let i = 0; i < result.right_place; i++) {
      score.push("DA");
    }

    for (let i = 0; i < result.not_right_place; i++) {
      score.push("NE");
    }

    for (
      let i = 0;
      i < 4 - (result.not_right_place + result.right_place);
      i++
    ) {
      score.push("EMPTY");
    }

    return score;
  };

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
      is_success: false,
      time: 0,
      is_game_started: true
    });

    this.generateRandomCombination();
  };

  switchLangHandler = selected => {
    console.log("Selected: ", selected);
    this.setState({ lang: selected });
  };

  options = [
    { value: "sr", label: "Srpski" },
    { value: "en", label: "English" }
  ];

  closeModal = () => {
    this.setState({ showModalGuide: false });
  };

  endGame = (is_game_success) => {
    console.log("Is game success:", is_game_success);
    this.setState(() => {
      return {
        is_game_end: true,
        is_success: is_game_success,
        is_game_started: false
      };
    });
  };

  updateTime = (time) => {
    this.setState(() => {
      return {
        time
      }
    })
  }

  pauseGame = () => {
    this.setState(() => {
      return {
        is_game_paused: true
      }
    })
  }

  continueGame = () => {
    this.setState(() => {
      return {
        is_game_paused: false
      };
    });
  }

  render() {
    return (
      <div className="l-skocko">
        <BackDrop
          showModalGuide={this.state.showModalGuide}
          closeModal={this.closeModal}
        />
        <div className="l-header">
          <div className="l-lang">
            <Select
              value={this.state.lang}
              options={this.options}
              onChange={this.switchLangHandler}
            />
          </div>
          <div className="l-guide">
            <button onClick={() => this.setState({ showModalGuide: true })}>
              {this.state.lang.value === "sr" ? "Uputstvo" : "Show guide"}
            </button>
          </div>
        </div>

        <ModalGuide
          showModalGuide={this.state.showModalGuide}
          closeModal={this.closeModal}
        >
          <ModalContent lang={this.state.lang.value} />
        </ModalGuide>
        <div className="l-skocko-top">
          <div className="l-table-game l-table">
            <GameCurrent game={this.state.game} />
          </div>

          <div className="l-skocko-time">
            <SkockoTime endGame={this.endGame} time={this.state.time} updateTime={this.updateTime} is_game_ended={this.state.is_game_end} is_success={this.state.is_success} is_game_started={this.state.is_game_started}
            is_game_paused={this.state.is_game_paused}/>
          </div>

          <div className="l-table-result l-table">
            <GameResult result={this.state.result_game} />
          </div>
        </div>
        <div className="l-skocko-bottom">
          {!this.state.is_game_end && (
            <div className="l-skocko-controls">
              <PlaySkocko
                lang={this.state.lang.value}
                submitRound={this.submitRoundHandler}
                isGameEnd={this.state.is_game_end}
                newGame={this.newGame}
                pauseGame={this.pauseGame}
                continueGame={this.continueGame}
                isGameStarted={this.state.is_game_started}
                isGamePaused={this.state.is_game_paused}
              />
            </div>
          )}
          <div className="l-end-game">
            {this.state.is_game_end && (
              <GameEnd
                lang={this.state.lang.value}
                newGame={this.newGame}
                is_success={this.state.is_success}
                random={this.state.randomCombination}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Skocko;
