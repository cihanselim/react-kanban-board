import React, { Component } from 'react';

class Header extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }

  render() {

    const headerStyle = {
      color: "gray"
    }

    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
              <h2 style={headerStyle}>Kanban Board</h2>
          </div>
        </div>
      </nav>
    );
  }
}


export default Header;
