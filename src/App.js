import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <h3>
              Create React Prototype
          </h3>
            <p>
              This project is bootstrapped with Create-React-App
            </p>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
