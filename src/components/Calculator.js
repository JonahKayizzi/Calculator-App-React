import React, { useState } from 'react';
import './Calculator.css';
import { calculate } from '../logic/calculate';

const Calculator = () => {
  const [obj, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const leftButtons = {
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

  const rightButtons = {
    divide: '÷',
    multiply: 'x',
    subtract: '-',
    add: '+',
    equal: '=',
  };

  const handleClick = (event) => {
    setState((obj) => calculate(obj, event.target.name));
  };

  const { total, operation, next } = obj;

  return (
    <section className="calculator-container flex-row">
      <div className="output-container flex-row">
        <p className="output">
          {total}
          {operation}
          {next}
        </p>
      </div>
      <div className="left-buttons flex-row">
        <button
          name={leftButtons.AC}
          type="button"
          className="left-button"
          onClick={handleClick}
        >
          AC
        </button>
        <button
          name="+/-"
          type="button"
          className="left-button"
          onClick={handleClick}
        >
          +/-
        </button>
        <button
          name={leftButtons.percent}
          type="button"
          className="left-button"
          onClick={handleClick}
        >
          %
        </button>
        <button
          name={leftButtons.seven}
          type="button"
          className="left-button"
          onClick={handleClick}
        >
          7
        </button>
        <button
          name={leftButtons.eight}
          type="button"
          className="left-button"
          onClick={handleClick}
        >
          8
        </button>
        <button
          name={leftButtons.nine}
          type="button"
          className="left-button"
          onClick={handleClick}
        >
          9
        </button>
        <button
          name={leftButtons.four}
          type="button"
          className="left-button"
          onClick={handleClick}
        >
          4
        </button>
        <button
          name={leftButtons.five}
          type="button"
          className="left-button"
          onClick={handleClick}
        >
          5
        </button>
        <button
          name={leftButtons.six}
          type="button"
          className="left-button"
          onClick={handleClick}
        >
          6
        </button>
        <button
          name={leftButtons.one}
          type="button"
          className="left-button"
          onClick={handleClick}
        >
          1
        </button>
        <button
          name={leftButtons.two}
          type="button"
          className="left-button"
          onClick={handleClick}
        >
          2
        </button>
        <button
          name={leftButtons.three}
          type="button"
          className="left-button"
          onClick={handleClick}
        >
          3
        </button>
        <button
          name={leftButtons.zero}
          type="button"
          className="left-button zero"
          onClick={handleClick}
        >
          0
        </button>
        <button
          name={leftButtons.decimal}
          type="button"
          className="left-button"
          onClick={handleClick}
        >
          .
        </button>
      </div>
      <div className="right-buttons flex-col">
        <button
          name={rightButtons.divide}
          type="button"
          className="right-button"
          onClick={handleClick}
        >
          &#247;
        </button>
        <button
          name={rightButtons.multiply}
          type="button"
          className="right-button"
          onClick={handleClick}
        >
          x
        </button>
        <button
          name={rightButtons.subtract}
          type="button"
          className="right-button"
          onClick={handleClick}
        >
          -
        </button>
        <button
          name={rightButtons.add}
          type="button"
          className="right-button"
          onClick={handleClick}
        >
          +
        </button>
        <button
          name={rightButtons.equal}
          type="button"
          className="right-button"
          onClick={handleClick}
        >
          =
        </button>
      </div>
    </section>
  );
};

export default Calculator;
