import React, { Component } from "react";
import "./NoteListItem.css";

export default class NoteListItem extends Component {
  render() {
    const { id, name, folderid, content } = this.props.note;
    const dateModified = new Date(this.props.note.modified);

    return (
      <div className="NoteListItem" key={id}>
        <h2>{name}</h2>
        <p>
          Date modified on:{" "}
          {new Intl.DateTimeFormat("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }).format(dateModified)}
        </p>
      </div>
    );
  }
}
