import React, { Component } from 'react';
//import uuid from 'uuid';
import Colons from './Components/Colons';
import AddColon from './Components/AddColon';
import Header from './Components/Header'

class App extends Component {
  constructor(){
    super();
    this.state = {
      colons: []
    }
  }

  getColons(){
    const persistence = JSON.parse(localStorage.getItem('persistence')) || [];
    for (var i=0;i<persistence.length;i++){
      this.state.colons.push(persistence[i]);
    }
    
    this.setState({colons: persistence});
    //console.log(this.state.colons)
  }

  componentWillMount(){
    this.getColons();
  
  }

  handleAddColon(colon){

    let colons = this.state.colons;
    colons.push(colon);
    //console.log(colons)
    localStorage.setItem('persistence', JSON.stringify(colons));
    this.setState({colons:colons});
  }


  handleDeleteColon(colonId){
    let colons = this.state.colons;
    let index = colons.findIndex(x => x.colonId === colonId);
    colons.splice(index, 1);
    localStorage.setItem('persistence', JSON.stringify(colons));
    this.setState({colons:colons});

  }

  render() {
    return (

      <div className="App">
        <Header />
        <div className="container">
        <AddColon addColon={this.handleAddColon.bind(this)}/>
        <Colons colons={this.state.colons} onDelete={this.handleDeleteColon.bind(this)} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  colon: React.PropTypes.object
}

export default App;
