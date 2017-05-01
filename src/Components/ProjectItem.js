//latest project herbir prop
import React, { Component } from 'react';

class ProjectItem extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }

  render() {
    return (
      <div className="col-md-12">
        <div className="panel panel-danger" >
          <div className="panel-heading">
            <p>{this.props.project.title}</p>
            <p>{this.props.project.category}</p>
            <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>
          </div>
        </div>
      </div>
    );
  }
}

ProjectItem.propTypes = {
  project: React.PropTypes.object,
  onDelete: React.PropTypes.func
}

export default ProjectItem;
