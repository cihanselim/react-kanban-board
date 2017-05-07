import React, { Component } from 'react';
import uuid from 'uuid';
import propTypes from 'prop-types'

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
        notes: []
      }}, function(){
        this.props.addColon(this.state.newColon);
      });
    }
    e.preventDefault();
  }

  render() {

    const addColonStyle = {
      marginBottom: "20px",
      marginTop: "20px",
    }
    return (
      <div className="container" style={addColonStyle}>
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Title Name" ref="title"></input>
                <span className="input-group-btn">
                  <button className="btn btn-default" type="submit">New Colon!</button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

AddColon.propTypes = {
  categories: propTypes.array,
  addColon: propTypes.func
}

export default AddColon;
