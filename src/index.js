import React from "react";
import ReactDOM from "react-dom";

const name = "James " + 7;

ReactDOM.render(
  <div>
    <h1>Hello {name}</h1>
    <p>El JXS es solo una herramienta mas {name}</p>
  </div>,
  document.getElementById("root")
);
