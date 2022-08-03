import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [object, setObject] = useState({ total: 0, next: null, operation: null });
  const { total, next, operation } = object;

  const handleClick = (event) => {
    setObject((state) => calculate(state, event.target.value));
  };

  return (
    <div className="container">
      <form name="calculator">
        <div className="inputArea">
          <input type="text" name="userInput" placeholder="0" value={(total || '') + (operation || '') + (next || '')} disabled />
        </div>
        <div className="buttons">
          <div className="btnAC btnr1">
            <input type="button" value="AC" onClick={handleClick} />
          </div>
          <div className="btnSign btnr1">
            <input type="button" value="+/-" onClick={handleClick} />
          </div>
          <div className="btnMod btnr1">
            <input type="button" value="%" onClick={handleClick} />
          </div>
          <div className="btnDiv btnr1">
            <input type="button" value="&#247;" onClick={handleClick} />
          </div>
          <div className="btn7 btnr2">
            <input type="button" value="7" onClick={handleClick} />
          </div>
          <div className="btn8 btnr2">
            <input type="button" value="8" onClick={handleClick} />
          </div>
          <div className="btn9 btnr2">
            <input type="button" value="9" onClick={handleClick} />
          </div>
          <div className="btnX btnr1">
            <input type="button" value="x" onClick={handleClick} />
          </div>
          <div className="btn4 btnr2">
            <input type="button" value="4" onClick={handleClick} />
          </div>
          <div className="btn5 btnr2">
            <input type="button" value="5" onClick={handleClick} />
          </div>
          <div className="btn6 btnr2">
            <input type="button" value="6" onClick={handleClick} />
          </div>
          <div className="btnM btnr1">
            <input type="button" value="-" onClick={handleClick} />
          </div>
          <div className="btnAC btnr2">
            <input type="button" value="1" onClick={handleClick} />
          </div>
          <div className="btn2 btnr2">
            <input type="button" value="2" onClick={handleClick} />
          </div>
          <div className="btn3 btnr2">
            <input type="button" value="3" onClick={handleClick} />
          </div>
          <div className="btnA btnr1">
            <input type="button" value="+" onClick={handleClick} />
          </div>
          <div className="btn0 colspan">
            <input type="button" value="0" onClick={handleClick} />
          </div>
          <div className="btnDecimal btnr2">
            <input type="button" value="." onClick={handleClick} />
          </div>
          <div className="btnE btnr1">
            <input type="button" value="=" onClick={handleClick} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Calculator;
