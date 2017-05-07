import React, { Component } from 'react';
import propTypes from 'prop-types';

class NoteItem extends Component {

  constructor(props){
    super(props)
    this.redLabelClick = this.redLabelClick.bind(this);
    this.greenLabelClick = this.greenLabelClick.bind(this);
    this.blueLabelClick = this.blueLabelClick.bind(this);
    this.orangeLabelClick = this.orangeLabelClick.bind(this);
    this.state = {
      style: [{
        backgroundColor: 'white',
        labelName: 'NO-LABEL',
        labelColor: 'White'
      }]
    };
  }

  deleteNote(id){
    this.props.onDelete(id);
  }

  editNote(id){
    this.props.onEdit(id);
  }

  redLabelClick(){
    var labelName = prompt("Label name: ")
    this.setState({
      style: [{
        backgroundColor: '#EF9A9A',
        labelName: labelName,
        labelColor: 'Red'
      }]
    });

  }

  blueLabelClick(){
    var labelName = prompt("Label name: ")
    this.setState({
      style: [{
        backgroundColor: '#BBDEFB',
        labelName: labelName,
        labelColor: 'Blue'
      }]
    });
  }

  greenLabelClick(){
    var labelName = prompt("Label name: ")
    this.setState({
      style: [{
        backgroundColor: '#81C784',
        labelName: labelName,
        labelColor: 'Green'
      }]
    });
  }

  orangeLabelClick(){
    var labelName = prompt("Label name: ")
    this.setState({
      style: [{
        backgroundColor: '#FFB74D',
        labelName: labelName,
        labelColor: 'Orange'
      }]
    });
  }

  render() {
    const titleStyle = {
      textTransform: "uppercase",
      width: "200px",
      wordWrap:"break-word"
    }

    const noteStyle = {
      width: "280px",
      wordWrap:"break-word"
    }

    const labelInfoStyle = {
      marginTop: "5px"
    }

    return (
      <div className="col-md-12">
        <div className="panel" style={this.state.style[0]} >
          <div className="panel-heading" >
            <div className="row">
              <div className="col-md-6" >
                <h4 style={titleStyle}>{this.props.note.title}</h4>
                <p style={noteStyle}>{this.props.note.category}</p>
              </div>
              <div className="col-md-6" >
                <span className="pull-right">
           
                  <a href="#" onClick={this.editNote.bind(this, this.props.note.id)}>
                    <button className="btn btn-default btn-xs" type="submit">
                      <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                    </button>
                  </a>
                   <a href="#" onClick={this.deleteNote.bind(this, this.props.note.id)}>
                    <button className="btn btn-default btn-xs" type="submit">
                      <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                    </button>
                  </a>
                </span>
              </div>
            </div>
            <div className="btn-group btn-group-justified" role="group" aria-label="...">
              <div className="btn-group" role="group">
                <button  onClick={this.greenLabelClick} type="button" className="btn btn-success btn-xs"></button>
              </div>
              <div className="btn-group" role="group">
                <button  onClick={this.blueLabelClick} type="button" className="btn btn-primary btn-xs"></button>
              </div>
              <div className="btn-group" role="group">
                <button onClick={this.redLabelClick} type="button" className="btn btn-danger btn-xs"></button>
              </div>
              <div className="btn-group" role="group">
                <button  onClick={this.orangeLabelClick} type="button" className="btn btn-warning btn-xs"></button>
              </div>
            </div>
            <p style={labelInfoStyle}><b>@{this.state.style[0].labelName}</b> | #{this.state.style[0].labelColor}</p>
          </div>
        </div>
      </div>
    );
  }
}

NoteItem.propTypes = {
  note: propTypes.object,
  onDelete: propTypes.func,
  onEdit: propTypes.func
}

export default NoteItem;