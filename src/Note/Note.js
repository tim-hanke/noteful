import React, { Component } from "react";
import "./Note.css";
import NoteListItem from "../NoteListItem/NoteListItem";

export default class Note extends Component {
  render() {
    const { notes } = this.props;
    const { noteId } = this.props.match.params;
    const note = notes.find((n) => n.id === noteId);
    return (
      <section className="Note">
        <NoteListItem note={note} />
        <p>{note.content}</p>
      </section>
    );
  }
}
