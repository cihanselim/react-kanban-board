//Latest Projects
import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  
  deleteProject(id){
    this.props.onDelete(id);
  }

  editNote(id){
    this.props.onEdit(id);
  }

  render() {

    
    let projectItems;
    if(this.props.projects){
      projectItems = this.props.projects.map(project => {
        return (
          <ProjectItem onDelete={this.deleteProject.bind(this)} onEdit={this.editNote.bind(this)} key={project.id} project={project} />
        );
      });
    }

    return (
      <div className="Projects">
        {projectItems}
      </div>
    );
  }
}

Projects.propTypes = {
  projects: React.PropTypes.array,
  onDelete: React.PropTypes.func,
  onEdit: React.PropTypes.func
}

export default Projects;
