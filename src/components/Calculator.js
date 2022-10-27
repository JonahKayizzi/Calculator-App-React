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
    this.leftButtons = {
      AC: 'AC',
      plusminus: 'X/-',
      percent: '%',
      seven: '7',
      eight: '8',
      nine: '9',
      four: '4',
      five: '5',
      six: '6',
      one: '1',
      two: '2',
      three: '3',
      zero: '0',
      decimal: '.',
    };

    this.rightButtons = {
      divide: '÷',
      multiply: 'x',
      subtract: '-',
      add: '+',
      equal: '=',
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
            name={this.leftButtons.AC}
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
            name={this.leftButtons.percent}
            type="button"
            className="left-button"
            onClick={this.handleClick}
          >
            %
          </button>
          <button
            name={this.leftButtons.seven}
            type="button"
            className="left-button"
            onClick={this.handleClick}
          >
            7
          </button>
          <button
            name={this.leftButtons.eight}
            type="button"
            className="left-button"
            onClick={this.handleClick}
          >
            8
          </button>
          <button
            name={this.leftButtons.nine}
            type="button"
            className="left-button"
            onClick={this.handleClick}
          >
            9
          </button>
          <button
            name={this.leftButtons.four}
            type="button"
            className="left-button"
            onClick={this.handleClick}
          >
            4
          </button>
          <button
            name={this.leftButtons.five}
            type="button"
            className="left-button"
            onClick={this.handleClick}
          >
            5
          </button>
          <button
            name={this.leftButtons.six}
            type="button"
            className="left-button"
            onClick={this.handleClick}
          >
            6
          </button>
          <button
            name={this.leftButtons.one}
            type="button"
            className="left-button"
            onClick={this.handleClick}
          >
            1
          </button>
          <button
            name={this.leftButtons.two}
            type="button"
            className="left-button"
            onClick={this.handleClick}
          >
            2
          </button>
          <button
            name={this.leftButtons.three}
            type="button"
            className="left-button"
            onClick={this.handleClick}
          >
            3
          </button>
          <button
            name={this.leftButtons.zero}
            type="button"
            className="left-button zero"
            onClick={this.handleClick}
          >
            0
          </button>
          <button
            name={this.leftButtons.decimal}
            type="button"
            className="left-button"
            onClick={this.handleClick}
          >
            .
          </button>
        </div>
        <div className="right-buttons flex-col">
          <button
            name={this.rightButtons.divide}
            type="button"
            className="right-button"
            onClick={this.handleClick}
          >
            &#247;
          </button>
          <button
            name={this.rightButtons.multiply}
            type="button"
            className="right-button"
            onClick={this.handleClick}
          >
            x
          </button>
          <button
            name={this.rightButtons.subtract}
            type="button"
            className="right-button"
            onClick={this.handleClick}
          >
            -
          </button>
          <button
            name={this.rightButtons.add}
            type="button"
            className="right-button"
            onClick={this.handleClick}
          >
            +
          </button>
          <button
            name={this.rightButtons.equal}
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
