import React, { Component } from "react";
import NoteListItem from "../NoteListItem/NoteListItem";
import "./NoteList.css";

export default class NoteList extends Component {
  render() {
    const { notes } = this.props;
    const { folderId } = this.props.match.params;
    return (
      <div className="NoteList">
        <h2>NoteList</h2>
        <ul>
          {notes.map((note) =>
            folderId === undefined || folderId === note.folderId ? (
              <li key={note.id}>
                <NoteListItem note={note} />
              </li>
            ) : null
          )}
        </ul>
      </div>
    );
  }
}
