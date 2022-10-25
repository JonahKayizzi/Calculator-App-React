import React from 'react';
import './Calculator.css';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="calculator-container flex-row">
        <div className="output-container flex-row">
          <p className="output">0</p>
        </div>
        <div className="left-buttons flex-row">
          <button type="button" className="left-button">
            AC
          </button>
          <button type="button" className="left-button">
            +/-
          </button>
          <button type="button" className="left-button">
            %
          </button>
          <button type="button" className="left-button">
            7
          </button>
          <button type="button" className="left-button">
            8
          </button>
          <button type="button" className="left-button">
            9
          </button>
          <button type="button" className="left-button">
            4
          </button>
          <button type="button" className="left-button">
            5
          </button>
          <button type="button" className="left-button">
            6
          </button>
          <button type="button" className="left-button">
            1
          </button>
          <button type="button" className="left-button">
            2
          </button>
          <button type="button" className="left-button">
            3
          </button>
          <button type="button" className="left-button zero">
            0
          </button>
          <button type="button" className="left-button">
            .
          </button>
        </div>
        <div className="right-buttons flex-col">
          <button type="button" className="right-button">
            &#247;
          </button>
          <button type="button" className="right-button">
            x
          </button>
          <button type="button" className="right-button">
            -
          </button>
          <button type="button" className="right-button">
            +
          </button>
          <button type="button" className="right-button">
            =
          </button>
        </div>
      </section>
    );
  }
}

export default Calculator;
