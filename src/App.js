import React, { Component } from 'react';
import Nav from './components/Nav';
import List from './components/List';
import Note from './components/Note';
import axios from 'axios';
import urlFor from './helpers/urlFor';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showNote: false,
      notes: []
    };
  }

  toggleNote = () => {
    this.setState({
      showNote: ! this.state.showNote
    })
  }

  getNotes = () => {
    axios.get(urlFor('notes'))
    .then((res) => this.setState({notes: res.data}) )
    .catch((err) => console.log(err.response.data) );
  }

  getNote = () => {
    console.log('Clicked!');
  }

  render() {
    const { showNote, notes } = this.state;

    return (
      <div className="App">
        <Nav toggleNote={this.toggleNote} showNote={showNote} />
        { showNote ?
            <Note />
            :
            <List 
              getNotes={this.getNotes}
              notes={notes}
              getNote={this.getNote} /> }
      </div>
    );
  }
}

export default App;
