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
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <Nav {...routeProps} folders={this.state.notes.folders} />
          )}
        />
        <Route
          path="/folder"
          render={(routeProps) => (
            <Nav {...routeProps} folders={this.state.notes.folders} />
          )}
        />

        <Route
          exact
          path="/"
          render={(routeProps) => (
            <NoteList {...routeProps} notes={this.state.notes.notes} />
          )}
        />
        <Route
          path="/folder/:folderId"
          render={(routeProps) => (
            <NoteList {...routeProps} notes={this.state.notes.notes} />
          )}
        />
      </main>
    );
  }
}

export default App;
