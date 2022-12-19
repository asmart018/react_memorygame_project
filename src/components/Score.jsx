import React, { Component } from "react";

class Score extends Component {
  render() {
    const { score, bestScore } = this.props;

    return (
      <div className="header">
        <h1 className="m-3">React: Memory Game Project</h1>
        <div className="row my-4 mx-1 score">
          <div className="col">
            <p>
              <u>Score</u>
            </p>
            <p>{score}</p>
          </div>
          <div className="col">
            <p>
              <u>Best Score</u>
            </p>
            <p>{bestScore}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Score;
