import React from "react";
import useStation from "./useStation";
import Inventory from "../inventory/Inventory";
import "./Station.css";

function Station(props) {
  const { title } = props;
  const {
    progress,
    storage,
    onDragOver,
    onDrop,
    isAllowed,
    status,
  } = useStation(props);

  return (
    <div
      className={`Station ${isAllowed && "is-over"} ${
        progress && "is-running"
      }`}
      // style={{ backgroundImage: `url(${icon})` }}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <div className="Station-info">
        <h2>{title}</h2>

        <div className="Station-inventory">
          <Inventory slots={[1, 1]} value={storage.input} />
          <Inventory slots={[1, 1]} value={storage.output} />
        </div>
      </div>

      <div className="Station-progress">
        <div className="Station-feedback">
          <span className="material-icons">settings</span>
        </div>
        <div className="Station-progressbar">
          {progress && (
            <div
              className="Station-progressbar-value"
              style={{ width: `${progress}%` }}
            ></div>
          )}

          {!progress && <span>{status}</span>}
        </div>
      </div>
    </div>
  );
}

export default Station;
