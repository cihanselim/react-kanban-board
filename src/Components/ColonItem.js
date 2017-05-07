import React, { Component } from 'react';
import propTypes from 'prop-types'
import Notes from './Notes';
import AddNote from './AddNote';
import $ from 'jquery';

class ColonItem extends Component {

  deleteColon(colonId){
    this.props.onDelete(colonId);
  }

  handleAddNote(note){  
    let notes = this.props.colon.notes;
    notes.push(note);
    this.setState({notes:notes});
  }

  handleDeleteNote(id){
    let notes = this.props.colon.notes;
    let index = notes.findIndex(x => x.id === id);
    notes.splice(index, 1);
    this.setState({notes:notes});
  }

  handleEditNote(id){
    let notes = this.props.colon.notes;
    let index = notes.findIndex(x => x.id === id);
    var newTitle = prompt("Please enter new title: ", notes[index].title);
    var newNote = prompt("Please enter new note: ", notes[index].category);
    notes[index].title = newTitle
    notes[index].category = newNote
    this.setState({notes:notes});
  }

  loadJson(){
    let notes = this.props.colon.notes;
    var json = require('../json/data.json');
    for (var i=0; i<json.notes.length; i++){
      notes.push(json.notes[i]);
      this.setState({notes:notes});
    }
  }

  saveJson(){
    var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.props.colon.notes, null, 2));
    if (this.props.colon.notes.length > 0){
        $( "#download" ).empty();
        $('<a href="data:' + data + '" download="data.json" title="Download all notes as JSON">JSON</a>').appendTo('#download');
    }
  }
  
  render() {
    const colonStyle = {
      heigth: this.props.colon.notes.length
    }

    const colon2Style = {
      marginTop: "20px"
    }

    const titleStyle = {
      textTransform: "uppercase"
    }  

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
                       {this.props.colon.notes.length}
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
                <Notes notes={this.props.colon.notes} onDelete={this.handleDeleteNote.bind(this)} onEdit={this.handleEditNote.bind(this)} />
                <AddNote addNote={this.handleAddNote.bind(this)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ColonItem.propTypes = {
  colon: propTypes.object,
  onDelete: propTypes.func
}

export default ColonItem;
