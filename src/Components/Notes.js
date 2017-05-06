import React, { Component } from 'react';
import propTypes from 'prop-types';
import NoteItem from './NoteItem';

class Notes extends Component {
  
  deleteNote(id){
    this.props.onDelete(id);
  }

  editNote(id){
    this.props.onEdit(id);
  }

  render() {
    let noteItems;
    if(this.props.notes){
      noteItems = this.props.notes.map(note => {
        return (
          <NoteItem onDelete={this.deleteNote.bind(this)} onEdit={this.editNote.bind(this)} key={note.id} note={note} />
        );
      });
    }

    return (
      <div className="Notes">
        {noteItems}
      </div>
    );
  }
}

Notes.propTypes = {
  notes: propTypes.array,
  onDelete: propTypes.func,
  onEdit: propTypes.func
}

export default Notes;