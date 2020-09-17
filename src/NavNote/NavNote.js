import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./NavNote.css";

class NavNote extends Component {
  constructor(props) {
    super(props);
    this.handleBackClick = this.handleBackClick.bind(this);
  }

  handleBackClick() {
    this.props.history.goBack();
  }

  render() {
    const { notes, folders } = this.props;
    const { noteId } = this.props.match.params;
    const note = notes.find((n) => n.id === noteId);
    const folder = folders.find((f) => f.id === note.folderId);

    return (
      <section className="Nav">
        <ul className="FolderList">
          <li>
            <NavLink to={"/folder/" + folder.id} key={folder.id}>
              {folder.name}
            </NavLink>
          </li>
        </ul>
        <button onClick={this.handleBackClick}>Go Back</button>
      </section>
    );
  }
}

export default withRouter(NavNote);
