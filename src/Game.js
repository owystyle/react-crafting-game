import React from "react";
import { GameProvider } from "./store/useGame";
import Crafting from "./crafting/Crafting";
import "./Game.css";

function Game() {
  return (
    <GameProvider>
      <div className="Game">
        <Crafting />
      </div>
    </GameProvider>
  );
}

export default Game;
