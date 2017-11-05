import React, { Component } from 'react';

class Note extends Component {
  onSubmit(e) {
    e.preventDefault();
    const formData = {
      title: this.title.value,
      content: this.content.value
    };
    this.props.submitNote(formData);
  }

  render() {
    const { note } = this.props;
    return(
      <div className="note-container">
        <form className="note-form" onSubmit={(e) => this.onSubmit(e)}>
          <input
            className="note-title-input"
            type="text"
            placeholder="Note Title..."
            defaultValue={note.title}
            ref={(input) => this.title = input}
          />
        
          <textarea
            className="note-textarea"
            placeholder="Type Here..."
            defaultValue={note.content}
            ref={(input) => this.content = input}
          />
          <input className="note-button" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Note;