import React from "react";
import "./App.scss";
import Nav from "./Nav";
import SelectWorkload from "./SelectWorkload";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="container">
          <h1 className="title">
            Select your <span>workload</span>
          </h1>
          <SelectWorkload />
        </div>
      </div>
    );
  }
}

export default App;
