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
            <div className="row">
              <div className="col-md-6" >
                <p>{this.props.project.title}</p>
                <p>{this.props.project.category}</p>
              </div>
              <div className="col-md-6" >
                <span className="pull-right">
                 
                  <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>
                    <button className="btn btn-default btn-xs" type="submit">
                      <span className="glyphicon glyphicon-hand-up" aria-hidden="true"></span>
                    </button>
                  </a>
                  <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>
                    <button className="btn btn-default btn-xs" type="submit">
                      <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                    </button>
                  </a>
                   <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>
                    <button className="btn btn-default btn-xs" type="submit">
                      <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                    </button>
                  </a>

                </span>
              </div>
            </div>
            
            
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
