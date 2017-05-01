import React, { Component } from 'react';
import uuid from 'uuid';
import Colons from './Components/Colons';
import AddColon from './Components/AddColon';
import './App.css';

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
        notes: ['Not 1', 'Not 2']
      },
      {
        colonId:uuid.v4(),
        title: 'Head 2',
        notes: ['Not 1', 'Not 2']
      },
      {
        colonId:uuid.v4(),
        title: 'Head 3',
        notes: ['Not 1', 'Not 2']
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
        <AddColon addColon={this.handleAddColon.bind(this)} />
        <Colons colons={this.state.colons} onDelete={this.handleDeleteColon.bind(this)} />
        
      </div>
    );
  }
}

export default App;
