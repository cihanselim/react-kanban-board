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

  changeColonName(colonId){
    //this.props.colon.title = "New Head"
    //console.log(this.props.project)
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

    const colon2Style = {
      marginTop: "20px"
    }

    return (

      <div className="col-md-4" style={colon2Style}>
        <div className="row-fluid">
          <div className="panel panel-default" >
            <div className="panel-heading">
              <div className="row" style={colonStyle}>
                <div className="col-md-6" >
                  <h4 className="pull-left">{this.props.colon.title}</h4>
                </div>
                <div className="col-md-6" >
                  <span className="pull-right">
                   
                    <a href="#" onClick={this.deleteColon.bind(this, this.props.colon.colonId)}>
                      <button className="btn btn-default btn-xs" type="submit">
                        <span className="glyphicon glyphicon-hand-up" aria-hidden="true"></span>
                      </button>
                    </a>
                    <a href="#" onClick={this.changeColonName.bind(this, this.props.colon.colonId)}>
                      <button className="btn btn-default btn-xs" type="submit">
                        <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                      </button>
                    </a>
                     <a href="#" onClick={this.deleteColon.bind(this, this.props.colon.colonId)}>
                      <button className="btn btn-default btn-xs" type="submit">
                        <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                      </button>
                    </a>

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
