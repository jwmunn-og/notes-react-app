import React, { Component } from 'react';

class List extends Component {
  componentWillMount() {
    this.props.getNotes();
  }

  render() {
    return (
      <div className="list-container">
        List Component
      </div>
    );
  }
}

export default List;