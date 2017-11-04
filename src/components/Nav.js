import React from 'react';

class Nav extends React.Component {
  render() {
    const { toggleNote, showNote } = this.props;
    
    return (
      <div className="nav-container">
        <div className="nav-logo">Notes</div>
        <div className="nav-button" onClick={() => toggleNote()} >
          { showNote ? 'Cancel' :  '+ Note' }
        </div> 
      </div>
    );
  }
}

export default Nav;