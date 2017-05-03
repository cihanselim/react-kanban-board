import React, { Component } from 'react';
import uuid from 'uuid';

class AddColon extends Component {
  constructor(){
    super();
    this.state = {
      newColon:{}
    }

  }

  handleSubmit(e){
    if(this.refs.title.value === ''){
      alert('Title is required');
    } else {
      this.setState({newColon:{
        colonId: uuid.v4(),
        title: this.refs.title.value,
        projects: []
      }}, function(){
        //console.log(this.state);
        this.props.addColon(this.state.newColon);
      });
    }
    e.preventDefault();

    //console.log(this.state.newColon)
  }
/*
  handleNoteSubmit(){
    console.log(this.state.newColon.projects)
    var titles = []
    for (var i =0; i<this.props.colons.length; i++){
      titles[i] = this.props.colons[i].title;
    }

    var title = prompt("Choose a colon and write it down: "+ titles)
    var msg = prompt("MESAJ: ")
    let projects = this.state.newColon.projects;
    if (title == this.state.newColon.title){
      projects.push(msg);
      this.setState({projects:projects});
    }
    else {
      console.log("nooo")
    }
    console.log(this.props.colons)
  }
*/
  render() {

    return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Title Name" ref="title"></input>
              <span className="input-group-btn">
                <button className="btn btn-default" type="submit">New Colon!</button>
              </span>
            </div>
          </form>
        </div>

        <div className="col-md-6">
          <form>
            <span className="input-group-btn">
              <div className="input-group">
                <button className="btn btn-default" type="submit">New Note!</button>
              </div>
            </span>
          </form>
        </div>

      </div>
    </div>
    );
  }
}

AddColon.propTypes = {
  categories: React.PropTypes.array,
  addColon: React.PropTypes.func
}

export default AddColon;
