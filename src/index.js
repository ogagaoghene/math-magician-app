<<<<<<< HEAD
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <form name="calculator">
          <div className="inputArea">
            <input type="text" name="userInput" placeholder="0" />
          </div>
          <div className="buttons">
            <div className="btnAC btnr1">
              <input type="button" value="AC" />
            </div>
            <div className="btnSign btnr1">
              <input type="button" value="+/-" />
            </div>
            <div className="btnMod btnr1">
              <input type="button" value="%" />
            </div>
            <div className="btnDiv btnr1">
              <input type="button" value="/" />
            </div>
            <div className="btn7 btnr2">
              <input type="button" value="7" />
            </div>
            <div className="btn8 btnr2">
              <input type="button" value="8" />
            </div>
            <div className="btn9 btnr2">
              <input type="button" value="9" />
            </div>
            <div className="btnX btnr1">
              <input type="button" value="*" />
            </div>
            <div className="btn4 btnr2">
              <input type="button" value="4" />
            </div>
            <div className="btn5 btnr2">
              <input type="button" value="5" />
            </div>
            <div className="btn6 btnr2">
              <input type="button" value="6" />
            </div>
            <div className="btnM btnr1">
              <input type="button" value="-" />
            </div>
            <div className="btnAC btnr2">
              <input type="button" value="1" />
            </div>
            <div className="btn2 btnr2">
              <input type="button" value="2" />
            </div>
            <div className="btn3 btnr2">
              <input type="button" value="3" />
            </div>
            <div className="btnA btnr1">
              <input type="button" value="+" />
            </div>
            <div className="btn0 colspan">
              <input type="button" value="0" />
            </div>
            <div className="btnDecimal btnr2">
              <input type="button" value="." />
            </div>
            <div className="btnE btnr1">
              <input type="button" value="=" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
>>>>>>> development
