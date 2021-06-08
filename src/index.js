import React from "react";
import ReactDOM from "react-dom";

const name = "James " + 7;
const lastname = "Damia;n";

ReactDOM.render(
  <div>
    <h1>
      Hello {name} {lastname}
    </h1>
    <p>El JXS es solo una herramienta mas {Math.floor(Math.random() * 3)} </p>
  </div>,
  document.getElementById("root")
);
