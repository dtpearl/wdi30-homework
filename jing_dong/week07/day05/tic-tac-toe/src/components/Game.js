import React, { Component } from 'react';
import './App.css'
import Board from './Board'

class Game extends Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{}</div> //status
          <div>{}</div> //TOdo
        </div>
      </div>
    );
  }
}

export default Game;
