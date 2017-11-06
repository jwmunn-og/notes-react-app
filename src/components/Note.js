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
    const formData = {
      name: this.name.value
    }
    this.props.submitTag(formData, this.props.note.id)
    this.props.closeTagForm();
  }
  
  renderTagForm(note) {
    if ( note.id !== undefined) {
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
  }

  renderTags (note) {
    if (note.tags) {
      return note.tags.map((tag, index) =>
        <div
          className="tag"
          key={index}
          onClick={(e) => this.props.deleteTag(note.id, tag.id)}
        >
          <span className="delete">
            <i className="material-icons">delete</i>
          </span>
          {tag.name}
        </div>
      );
    }
  }

  render() {
    const { note, closeTagForm } = this.props;
    return(
      <div className="note-container">
        <form
          className="note-form"
          onSubmit={(e) => this.onSubmit(e)}
          onClick={() => closeTagForm()}
        >
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
            {this.renderTagForm(note)}
          </div>
          <div className="tag-list-container">
            {this.renderTags(note)}
          </div>
        </div>
      </div>
    );
  }
}

export default Note;