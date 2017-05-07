import React, { Component } from 'react';

class Header extends Component {

  render() {
    const headerStyle = {
      color: "black",
      textAlign: "center",
      fontFamily: 'Titillium Web',
      marginBottom: "20px"
    }

    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <h2 style={headerStyle}>- Kanban Board -</h2>
        </div>
      </nav>
    );
  }
}


export default Header;
