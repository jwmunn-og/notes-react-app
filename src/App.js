import React, { Component } from 'react';
import Nav from './components/Nav';
import List from './components/List';
import Note from './components/Note';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <List />
        <Note />
      </div>
    );
  }
}

export default App;
