import React, { Component } from 'react';
import propTypes from 'prop-types';
import ColonItem from './ColonItem';

class Colons extends Component {

  deleteColon(colonId){
    this.props.onDelete(colonId);
  }

  render() {

    let colonItems;
    if(this.props.colons){
      colonItems = this.props.colons.map(colon => {
        return (
          <ColonItem onDelete={this.deleteColon.bind(this)} key={colon.colonId} colon={colon} />
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
  colons: propTypes.array,
  onDelete: propTypes.func
}

export default Colons;
