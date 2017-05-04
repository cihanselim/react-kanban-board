//latest project herbir prop
import React, { Component } from 'react';
import Projects from './Projects';
import AddProject from './AddProject';
import $ from 'jquery';

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

  handleAddProject(project){
    
    let projects = this.props.colon.projects;
    projects.push(project);
    //for data persistence
    localStorage.setItem('projects', JSON.stringify(projects));
    this.setState({projects:projects});
    console.log(this.props)
  }

  handleDeleteProject(id){
    let projects = this.props.colon.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    localStorage.setItem('projects', JSON.stringify(projects));
    this.setState({projects:projects});
  }

  handleEditNote(id){
    let notes = this.props.colon.projects;
    let index = notes.findIndex(x => x.id === id);
    var newTitle = prompt("Please enter new title: ", notes[index].title);
    var newNote = prompt("Please enter new note: ", notes[index].category);
    notes[index].title = newTitle
    notes[index].category = newNote
    localStorage.setItem('projects', JSON.stringify(notes));
    this.setState({projects:notes});
  }

  loadJson(){
    let projects = this.props.colon.projects;
    var json = require('../json/data.json');
    for (var i=0; i<json.projects.length; i++){
      projects.push(json.projects[i]);
      this.setState({projects:projects});
    }

  }

  saveJson(){
    var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.props.colon.projects, null, 2));
    console.log(data)
    if (this.props.colon.projects.length > 0){
        $( "#download" ).empty();
        $('<a href="data:' + data + '" download="data.json" title="Download all notes as JSON">JSON</a>').appendTo('#download');
    }
  }
  
  render() {
   
    const colonStyle = {
      heigth: this.props.colon.projects.length
    }

    const colon2Style = {
      marginTop: "20px"
    }

    const titleStyle = {
      textTransform: "uppercase"
    }    

    //var persistence = JSON.parse(localStorage.getItem('projects')) || [];
    //projects={persistence}

    return (
    <div className="col-md-4" style={colon2Style}>
      <div className="row-fluid">
        <div className="panel panel-default" >
          <div className="panel-heading">
            <div className="row" style={colonStyle}>
              <div className="col-md-6" >
                <h4 className="pull-left" style={titleStyle}>{this.props.colon.title}</h4>
              </div>
              <div className="col-md-6">
                <span className="pull-right">

                  <a href="#">
                    <button className="btn btn-default btn-xs" type="submit" title="Notes">
                     {this.props.colon.projects.length}
                    </button>
                  </a>

                  <a href="#" id="download">
                    <button onClick={this.saveJson.bind(this)} className="btn btn-default btn-xs" type="submit" title="Download all notes as JSON">
                     <span className="glyphicon glyphicon-save" aria-hidden="true"></span>
                    </button>
                  </a>

                  <a href="#">
                    <button onClick={this.loadJson.bind(this)} className="btn btn-default btn-xs" type="submit" title="Load JSON">
                     <span className="glyphicon glyphicon-open" aria-hidden="true"></span>
                    </button>
                  </a>
                  
                  <a href="#" onClick={this.deleteColon.bind(this, this.props.colon.colonId)}>
                    <button className="btn btn-default btn-xs" type="submit" title="Close">
                      <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                    </button>
                  </a>
                </span>
              </div>
              <Projects projects={this.props.colon.projects} onDelete={this.handleDeleteProject.bind(this)} onEdit={this.handleEditNote.bind(this)} />
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
