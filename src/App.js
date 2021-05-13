import React, { Component } from "react"
import Search from "./components/search";
import Analytics from "./components/analytics";

import NaviBar from "./components/navibar";
import { Route, NavLink, HashRouter } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <NaviBar />
        </div>
        <div className="content">
          <Route path="/home" component={Search} />
          <Route path="/analytics" component={Analytics} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
