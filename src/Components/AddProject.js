import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
  constructor(){
    super();
    this.state = {
      newProject:{}
    }
  }

  handleSubmit(e){
    if(this.refs.title.value === ''){
      alert('Title is required');
    } else {
      this.setState({newProject:{
        id: uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value
      }}, function(){
        //console.log(this.state);
        this.props.addProject(this.state.newProject);
      });
    }
    e.preventDefault();
  }

  render() {
  
    return (
    <form onSubmit={this.handleSubmit.bind(this)}>
      <div className="col-md-12">
        <input className="form-control" placeholder="Note Title" ref="title"></input>
      </div>
      <div className="col-md-12">
        <input className="form-control" placeholder="Note" ref="category"></input>
      </div>
      <div className="col-md-12">
        <span className="pull-right">
        <button className="btn btn-primary" type="submit">SAVE</button>
        </span>
      </div>
    </form>
    );
  }
}

AddProject.propTypes = {
  categories: React.PropTypes.array,
  addProject: React.PropTypes.func
}

export default AddProject;
