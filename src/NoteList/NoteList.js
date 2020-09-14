import React, { Component } from "react";
import NoteListItem from "../NoteListItem/NoteListItem";
import "./NoteList.css";

export default class NoteList extends Component {
  render() {
    return (
      <div className="NoteList">
        <h2>NoteList</h2>
        <ul>
          <li>
            <NoteListItem />
          </li>
          <li>
            <NoteListItem />
          </li>
          <li>
            <NoteListItem />
          </li>
        </ul>
      </div>
    );
  }
}
