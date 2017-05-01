//latest project herbir prop
import React, { Component } from 'react';

import uuid from 'uuid';
import Projects from './Projects';
import AddProject from './AddProject';
class ColonItem extends Component {

  constructor(){
    super();
    this.state = {
      projects: []
    }
  }

  deleteColon(colonId){
    this.props.onDelete(colonId);
  }

  getProjects(){
    this.setState({projects: [
      {
        id:uuid.v4(),
        title: 'Business Website',
        category: 'Web Deisgn'
      },
      {
        id:uuid.v4(),
        title: 'Social App',
        category: 'Mobile Development'
      },
      {
        id:uuid.v4(),
        title: 'Ecommerce Shopping Cart',
        category: 'Web Development'
      }
    ]});
  }

  componentWillMount(){
    this.getProjects();
  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects:projects});
  }

  render() {
    const colonStyle = {
      heigth: this.state.projects.length
    }

    return (
      <div className="col-md-4">
        <div className="row-fluid">
            <div className="panel panel-success" >
              <div className="panel-heading">
                <div className="row" style={colonStyle}>
                  <div className="col-md-8" >
                    <h4 className="pull-left">{this.props.colon.title}</h4>
                  </div>
                  <div className="col-md-4" >
                    <span className="pull-right">
                    <a href="#" onClick={this.deleteColon.bind(this, this.props.colon.colonId)}>X</a>
                    </span>
                  </div>
                  <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
                  <AddProject addProject={this.handleAddProject.bind(this)} />
                </div>
                
              </div>
            </div>
        </div>
      </div>
    );
  }
}

ColonItem.propTypes = {
  colon: React.PropTypes.object,
  onDelete: React.PropTypes.func
}

export default ColonItem;
