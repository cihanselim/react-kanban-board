import React, { Component } from 'react';
import uuid from 'uuid';
import Colons from './Components/Colons';
import AddColon from './Components/AddColon';
import './App.css';

import Header from './Components/Header'
class App extends Component {
  constructor(){
    super();
    this.state = {
      colons: []
    }
  }

  getColons(){
    this.setState({colons: [
      {
        colonId:uuid.v4(),
        title: 'Head 1',
        notes: []
      },
      {
        colonId:uuid.v4(),
        title: 'Head 2',
        notes: []
      }
    ]});
  }

  componentWillMount(){
    this.getColons();
  }

  handleAddColon(colon){
    let colons = this.state.colons;
    colons.push(colon);
    this.setState({colons:colons});
  }

  handleDeleteColon(colonId){
    let colons = this.state.colons;
    let index = colons.findIndex(x => x.colonId === colonId);
    colons.splice(index, 1);
    this.setState({colons:colons});
  }

  

  render() {
    return (

      <div className="App">
        <Header />
        <div className="container">
        <AddColon addColon={this.handleAddColon.bind(this)} />
        <Colons colons={this.state.colons} onDelete={this.handleDeleteColon.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
