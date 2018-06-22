import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './ToDos/Components/Containers/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header mb-3">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">To Do App</h1>
        </header>
        <TodoList/>
      </div>
    );
  }
}

export default App;
