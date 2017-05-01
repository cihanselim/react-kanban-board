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
        title: this.refs.title.value
      }}, function(){
        //console.log(this.state);
        this.props.addColon(this.state.newColon);
      });
    }
    e.preventDefault();
  }

  render() {

    return (
    
      <div className="row">
        <div className="col-lg-12">
          <div className="input-group">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <input type="text" className="form-control" placeholder="Title Name" ref="title"></input>
              <span className="input-group-btn">
                <button className="btn btn-default" type="submit">Go!</button>
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
