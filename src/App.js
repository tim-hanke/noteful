import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import NoteList from "./NoteList/NoteList";
import notes from "./dummy-store/dummy-store";

class App extends Component {
  state = {
    notes,
    error: null,
  };

  render() {
    return (
      <main className="App">
        <Header />
        <Nav />
        <NoteList />
      </main>
    );
  }
}

export default App;
