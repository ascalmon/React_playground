import React, { Component } from 'react';
import Users from './components/Users';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is my app</h1>
        <Users />
      </div>
    );
  }
}

export default App;
