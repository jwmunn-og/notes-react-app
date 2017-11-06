import React, { Component } from 'react';

class Note extends Component {
  onSubmit(e) {
    e.preventDefault();
    const formData = {
      title: this.title.value,
      content: this.content.value
    };
    this.props.submitNote(formData, this.props.note.id);
  }

  onTagSubmit(e) {
    e.preventDefault();
    console.log(this.name.value);
    this.props.closeTagForm();
  }
  
  renderTagForm() {
    if(!this.props.newTag) {
      return (
        <span>
          Tag your note:
          <i 
            className="tag-button material-icons"
            onClick={() => this.props.showTagForm()}
          >
            add circle
          </i>
        </span>
      );
    } else {
      return (
        <form onSubmit={(e) => this.onTagSubmit(e)}>
          <input
            className="tag-input"
            type="text"
            placeholder="Tag Name..."
            ref={(input) => this.name = input}
          />
        </form>
      );
    }
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
        <div className="tag-container">
          <div className="tag-button-container">
            {this.renderTagForm()}
          </div>
        </div>
      </div>
    );
  }
}

export default Note;