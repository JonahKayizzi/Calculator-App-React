import React from 'react';
import './Calculator.css';
import { calculate, isNumber } from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toDisplay: 0 };
    this.obj = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (event) => {
    const buttonNm = event.target.name;
    this.obj = calculate(this.obj, buttonNm);
    if (isNumber(buttonNm) || buttonNm === '+/-') {
      this.setState({ toDisplay: this.obj.next || 0 });
    } else {
      this.setState({ toDisplay: this.obj.total || 0 });
    }
  };

  render() {
    const { toDisplay } = this.state;
    return (
      <section className="calculator-container flex-row">
        <div className="output-container flex-row">
          <p className="output">{toDisplay}</p>
        </div>
        <div className="left-buttons flex-row">
          <button
            name="AC"
            type="button"
            className="left-button"
            onClick={this.handleClick}
          >
            AC
          </button>
          <button
            name="+/-"
            type="button"
            className="left-button"
            onClick={this.handleClick}
          >
            +/-
          </button>
          <button
            name="%"
            type="button"
            className="left-button"
            onClick={this.handleClick}
          >
            %
          </button>
          <button
            name="7"
            type="button"
            className="left-button"
            onClick={this.handleClick}
          >
            7
          </button>
          <button
            name="8"
            type="button"
            className="left-button"
            onClick={this.handleClick}
          >
            8
          </button>
          <button
            name="9"
            type="button"
            className="left-button"
            onClick={this.handleClick}
          >
            9
          </button>
          <button
            name="4"
            type="button"
            className="left-button"
            onClick={this.handleClick}
          >
            4
          </button>
          <button
            name="5"
            type="button"
            className="left-button"
            onClick={this.handleClick}
          >
            5
          </button>
          <button
            name="6"
            type="button"
            className="left-button"
            onClick={this.handleClick}
          >
            6
          </button>
          <button
            name="1"
            type="button"
            className="left-button"
            onClick={this.handleClick}
          >
            1
          </button>
          <button
            name="2"
            type="button"
            className="left-button"
            onClick={this.handleClick}
          >
            2
          </button>
          <button
            name="3"
            type="button"
            className="left-button"
            onClick={this.handleClick}
          >
            3
          </button>
          <button
            name="0"
            type="button"
            className="left-button zero"
            onClick={this.handleClick}
          >
            0
          </button>
          <button
            name="."
            type="button"
            className="left-button"
            onClick={this.handleClick}
          >
            .
          </button>
        </div>
        <div className="right-buttons flex-col">
          <button
            name="÷"
            type="button"
            className="right-button"
            onClick={this.handleClick}
          >
            &#247;
          </button>
          <button
            name="x"
            type="button"
            className="right-button"
            onClick={this.handleClick}
          >
            x
          </button>
          <button
            name="-"
            type="button"
            className="right-button"
            onClick={this.handleClick}
          >
            -
          </button>
          <button
            name="+"
            type="button"
            className="right-button"
            onClick={this.handleClick}
          >
            +
          </button>
          <button
            name="="
            type="button"
            className="right-button"
            onClick={this.handleClick}
          >
            =
          </button>
        </div>
      </section>
    );
  }
}

export default Calculator;
