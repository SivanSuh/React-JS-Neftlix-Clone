import React from "react";
import "./App.css";
import Netflix from "./Netflix";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./Signup";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact component={Netflix} />
          <Route path="/signup" component={Signup} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
