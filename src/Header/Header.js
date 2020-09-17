import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Link to="/" className="Header_Title">
          Noteful
        </Link>
      </div>
    );
  }
}
