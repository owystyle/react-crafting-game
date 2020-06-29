import React from "react";
import useStation from "./useStation";
import Inventory from "../inventory/Inventory";
import "./Station.css";

function Station(props) {
  const { name, title, color } = props;
  const { progress, store, onDragOver, onDrop, isAllowed, status } = useStation(
    props
  );

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
        <h2 style={{ color }}>{title}</h2>

        <div className="Station-inventory">
          <Inventory
            slots={[1, 1]}
            value={store[`${name}-input`]}
            location={`${name}-input`}
            icon={<span className="material-icons">system_update_alt</span>}
          />
          <div className="Station-slot-running">
            <Inventory
              disableDrag
              slots={[1, 1]}
              value={store[`${name}-running`]}
              location={`${name}-running`}
              icon={<span className="material-icons">settings</span>}
            />
          </div>
          <Inventory
            slots={[1, 1]}
            value={store[`${name}-output`]}
            location={`${name}-output`}
            icon={<span className="material-icons">present_to_all</span>}
          />
        </div>
      </div>

      <div className="Station-progress">
        <div className="Station-feedback">
          <span className="material-icons" style={{ color }}>
            settings
          </span>
        </div>
        <div className="Station-progressbar">
          {progress && (
            <div
              className="Station-progressbar-inner"
              style={{ borderColor: color }}
            >
              <div
                className="Station-progressbar-value"
                style={{ width: `${progress}%`, backgroundColor: color }}
              ></div>
            </div>
          )}

          {!progress && <span style={{ color }}>{status}</span>}
        </div>
      </div>

      <div className="Station-bottom" style={{ backgroundColor: color }} />
    </div>
  );
}

export default Station;
