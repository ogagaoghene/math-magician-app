import React from 'react';
import Calculator from './Components/Calculator';
import './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Calculator />
      </>
    );
  }
}

export default App;
