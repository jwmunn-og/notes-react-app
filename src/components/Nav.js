import React from 'react';

class Nav extends React.Component {
  render() {
    return (
      <div className="nav-container">
        <div className="nav-logo">Notes</div>
        <div className="nav-button">
          + Note
        </div> 
      </div>
    );
  }
}

export default Nav;