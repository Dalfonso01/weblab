import React, { Component } from "react";
import NavBar from "./modules/NavBar.js";
import Profile from "./pages/Profile.js";

// to use styles, import the necessary CSS files
import "../utilities.css";
import "./App.css";

/**
 * Define the "App" component as a class.
 */
class App extends Component {
  // required method: whatever is returned defines what
  // shows up on screen
  render() {
    return (
      // <> is like a <div>, but won't show
      // up in the DOM tree
      <>
        <NavBar />
        <div className="App-container">
          <Profile />
        </div>
      </>
    );
  }
}

export default App;
