import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();  
    this.state = {
      avengers: ['Iron Man', 'Black Widow', 'Hawkeye', 'Hulk', 'Thor']
    };
  }
  
  
  
  
  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Avengers: By David White</h1>
        </header>
        {this.state.avengers.map(avenger => <div>{avenger}</div>)}
      </div>
    );
  }
}

export default App;
