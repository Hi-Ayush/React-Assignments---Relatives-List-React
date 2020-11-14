import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    const members = ["Ak", "Pk", "Bk", "Ck"];
    return (
      <div id="main">
        {/* Do not remove the main div */}
        <ol key="relativeList">
          {members.map((relative, index) => (
            <li key={"relativeListItem" + (index + 1)}>{relative}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
