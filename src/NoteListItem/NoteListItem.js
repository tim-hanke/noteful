import React, { Component } from "react";
import "./NoteListItem.css";
import { Link } from "react-router-dom";

export default class NoteListItem extends Component {
  render() {
    const { id, name, folderid, content } = this.props.note;
    const dateModified = new Date(this.props.note.modified);

    return (
      <div className="NoteListItem" key={id}>
        <Link to={"/note/" + id}>{name}</Link>
        <p>
          Date modified:{" "}
          {new Intl.DateTimeFormat("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }).format(dateModified)}
        </p>
      </div>
    );
  }
}
