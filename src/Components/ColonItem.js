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

  handleEditNote(id){
    let notes = this.state.projects;
    let index = notes.findIndex(x => x.id === id);
    var newTitle = prompt("Please enter new title: ", notes[index].title);
    var newNote = prompt("Please enter new note: ", notes[index].category);
    notes[index].title = newTitle
    notes[index].category = newNote
    
    this.setState({projects:notes});
  }

  loadJson(){
    let projects = this.state.projects;
    var json = require('../json/data.json');
    for (var i=0; i<json.projects.length; i++){
      projects.push(json.projects[i]);
      this.setState({projects:projects});
    }
  }

  saveJson(){
    var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.state, null, 2));
    
    if (this.state.projects.length > 0){
        $( "#download" ).empty();
        $('<a href="data:' + data + '" download="data.json" title="Download all notes as JSON">JSON</a>').appendTo('#download');
    }
  }
  
  render() {
   
    const colonStyle = {
      heigth: this.state.projects.length
    }

    const colon2Style = {
      marginTop: "20px"
    }

    const titleStyle = {
      textTransform: "uppercase"
    }

    //export as JSON (used jquery)
    /*
    var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.state, null, 2));
    
    var a = document.createElement('a');
    a.href = 'data:' + data;
    a.download = 'data.json';
    a.innerHTML = 'download JSON';

    var container = document.getElementById('container');
    container.appendChild(a);
    */

    

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
                       {this.state.projects.length}
                      </button>
                    </a>

                    <a href="#" >
                      <button  onClick={this.saveJson.bind(this)} className="btn btn-default btn-xs" type="submit" title="Download all notes as JSON">
                       <span id="download" className="glyphicon glyphicon-save" aria-hidden="true"></span>
                      </button>
                    </a>

                    <a href="#">
                      <button onClick={this.loadJson.bind(this)} className="btn btn-default btn-xs" type="submit" title="Load JSON">
                       <span className="glyphicon glyphicon-open" aria-hidden="true"></span>
                      </button>
                    </a>
                                        
                    <a href="#" onClick={this.deleteColon.bind(this, this.props.colon.colonId)}>
                      <button className="btn btn-default btn-xs" type="submit" title="Drag">
                        <span className="glyphicon glyphicon-hand-up" aria-hidden="true"></span>
                      </button>
                    </a>
                    
                    <a href="#" onClick={this.deleteColon.bind(this, this.props.colon.colonId)}>
                      <button className="btn btn-default btn-xs" type="submit" title="Close">
                        <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                      </button>
                    </a>
                  </span>
                </div>
                <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} onEdit={this.handleEditNote.bind(this)} />
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
