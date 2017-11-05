import React, { Component } from 'react';
import NoteCard from './NoteCard';

class List extends Component {
  componentWillMount() {
    this.props.getNotes();
  }

  render() {
    const { notes } = this.props;

    const cards = notes.map((note, index) => {
      return (
        <NoteCard
          key={index}
          index={index}
          note={note}
        />
      );
    });

    return (
      <div className="list-container">
        {cards}
      </div>
    );
  }
}

export default List;