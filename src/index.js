import React from "react";
import ReactDOM from "react-dom";
import "./normalize.css";
import "./index.css";
import "./animations.css";

import Game from "./Game";

ReactDOM.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>,
  document.getElementById("game")
);
