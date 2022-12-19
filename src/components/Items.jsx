import React, { Component } from "react";

let items = [];
let j = 1;

for (let i = 945; i < 965; i++) {
  let item = {
    id: j++,
    letter: String.fromCharCode(i),
    wasDisplayed: false,
  };
  items.push(item);
}

class Items extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items,
    };

    this.yesNoBtn = this.yesNoBtn.bind(this);
  }

  randLetter() {
    let randNum = Math.round(Math.random() * items.length);
    return randNum;
  }

  yesNoBtn(id, answer) {
    const { updateScore } = this.props;
    id = id - 1;

    if (items[id].wasDisplayed == answer) {
      this.props.updateScore(true);
      const items = this.state.items.map((i) => {
        if (i.id == this.state.items[id].id) {
          i.wasDisplayed = true;
          return i;
        } else return i;
      });
    } else {
      this.props.updateScore(false);
      const items = this.state.items.map((i) => {
        i.wasDisplayed = false;
        return i;
      });
    }
    this.setState({ items });
  }

  render() {
    const { items } = this.state;
    let letter = items[this.randLetter()];

    return (
      <div className="game-height">
        <div className="row item-row">
          <div className="col m-auto">
            <div className="card">
              <p className="letter">{letter.letter}</p>
            </div>
          </div>
        </div>
        <div>
          <h5>Have you seen this letter yet?</h5>
        </div>
        <div className="row">
          <div className="col m-auto">
            <button
              className="btn btn--outline-secondary"
              onClick={() => this.yesNoBtn(letter.id, true)}
            >
              Yes
            </button>
          </div>
          <div className="col m-auto">
            <button
              className="btn btn--outline-secondary"
              onClick={() => this.yesNoBtn(letter.id, false)}
            >
              No
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Items;
