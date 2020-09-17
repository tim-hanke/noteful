import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import NoteList from "./NoteList/NoteList";
import notes from "./dummy-store/dummy-store";
import Note from "./Note/Note";
import NavNote from "./NavNote/NavNote";

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
          path="/note/:noteId"
          render={(routeProps) => (
            <NavNote
              {...routeProps}
              folders={this.state.notes.folders}
              notes={this.state.notes.notes}
            />
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
        <Route
          path="/note/:noteId"
          render={(routeProps) => (
            <Note {...routeProps} notes={this.state.notes.notes} />
          )}
        />
      </main>
    );
  }
}

export default App;
