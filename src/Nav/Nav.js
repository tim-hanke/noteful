import React, { Component } from "react";
import "./Nav.css";
import { NavLink, Link } from "react-router-dom";

export default class Nav extends Component {
  static defaultProps = {
    folders: [],
  };

  render() {
    const { folders } = this.props;
    return (
      <section className="Nav">
        <ul className="FolderList">
          {folders.map((folder) => (
            <NavLink to={"/folder/" + folder.id} key={folder.id}>
              {folder.name}
            </NavLink>
          ))}
        </ul>
        <Link to="/addfolder">Add Folder</Link>
      </section>
    );
  }
}
