//Latest Projects
import React, { Component } from 'react';
import ColonItem from './ColonItem';

class Colons extends Component {
  deleteColon(colonId){
    this.props.onDelete(colonId);
  }

  render() {
    let colonItems;
    if(this.props.colons){
      colonItems = this.props.colons.map(colon => {
        //console.log(project);
        return (
          <ColonItem onDelete={this.deleteColon.bind(this)} key={colon.title} colon={colon} />
        );
      });
    }
    return (
      <div className="Colons">
        {colonItems}
      </div>
    );
  }
}

Colons.propTypes = {
  colons: React.PropTypes.array,
  onDelete: React.PropTypes.func
}

export default Colons;
