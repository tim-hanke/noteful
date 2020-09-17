import React, { Component } from "react";
import NoteListItem from "../NoteListItem/NoteListItem";
import "./NoteList.css";

export default class NoteList extends Component {
  render() {
    const { notes } = this.props;
    const { folderId } = this.props.match.params;
    return (
      <section className="NoteList">
        <ul>
          {notes.map((note) =>
            folderId === note.folderId || folderId === undefined ? (
              <li key={note.id}>
                <NoteListItem note={note} />
              </li>
            ) : null
          )}
        </ul>
      </section>
    );
  }
}
