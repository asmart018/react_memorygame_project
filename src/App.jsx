import React, { Component } from "react";
import "./App.css";
import Score from "./components/Score";
import Items from "./components/Items";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      bestScore: 0,
    };

    this.updateScore = this.updateScore.bind(this);
  }

  updateScore(bool) {
    if (bool == true) {
      this.setState({ score: this.state.score + 1 });
    } else {
      if (this.state.score > this.state.bestScore) {
        this.setState({ bestScore: this.state.score, score: 0 });
        window.alert(
          "Your score was " +
            this.state.score +
            "\n" +
            "Your best score is " +
            this.state.score
        );
      } else {
        window.alert(
          "Your score was " +
            this.state.score +
            "\n" +
            "Your best score is " +
            this.state.bestScore
        );
        this.setState({ bestScore: this.state.score, score: 0 });
      }
    }
  }

  render() {
    const { score, bestScore } = this.state;
    return (
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Score score={score} bestScore={bestScore} />
        <Items updateScore={this.updateScore} />
      </main>
    );
  }
}

export default App;
