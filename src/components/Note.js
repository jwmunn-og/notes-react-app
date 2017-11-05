import React, { Component } from 'react';

class Note extends Component {
  render() {
    const { note } = this.props;
    return(
      <div className="note-container">
        <form className="note-form">
          <input
            className="note-title-input"
            type="text"
            placeholder="Note Title..."
            defaultValue={note.title}
          />
        </form>
        <textarea
          className="note-textarea"
          placeholder="Type Here..."
          defaultValue={note.content}
        />
        <input className="note-button" type="submit" value="Submit" />
      </div>
    );
  }
}

export default Note;