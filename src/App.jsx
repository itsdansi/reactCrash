import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Notes from "./components/Notes";
import CreateNote from "./components/CreateNote";
import Time from "./Time";

function App() {
  return (
    <Router>
      <Navbar />

      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/notes">
        <Notes />
      </Route>
      <Route path="/create-note">
        <CreateNote />
      </Route>

      <Time />
    </Router>
  );
}

export default App;
