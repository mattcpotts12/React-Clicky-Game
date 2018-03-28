import React, { Component } from 'react';

//-------Input components & JSON
import playingCards from "./cards.json";
import Wrapper from "./components/Wrapper";
import Instructions from "./components/Instructions";
import './App.css';

class App extends Component {
  state = {
    score: 0,
    highScore: 0,
    correctGuesses: 0,
    playingCards
  };

  gameOver = () => {

  }

  updateScore = () => {
    this.setState((newState) => ({
      score: newState.score
    }), () => this.winLoss())
  }

  updateHighScore = () => {
    this.setState((newState) => ({
      highScore: newState.score
    }))
  }

  winLoss = () => {
    
  }

  clickCount = () => {

  }

  resetGame = () => {
    this.state.playingCards.forEach((image) => {
      image.clicked = false;
    })
    this.setState({score: 0})
  }

  render() {
    return (
      <Wrapper>
          <Instructions />
          <div className="scoreBoard">
            <h4>Correct Guesses: {this.state.correctGuesses}</h4>
            <h4>Personal Best: {}</h4>
            <h4>High Score: {this.state.highScore}</h4>
          </div>
      </Wrapper>
    );
  }
}

export default App;
