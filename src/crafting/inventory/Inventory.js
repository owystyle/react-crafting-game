import React from "react";
import Ingredient from "../ingredient/Ingredient";
import "./Inventory.css";

function Inventory(props) {
  const { slots, value, location, disableDrag, small, icon } = props;
  const cols = Array(slots[0]).join(".").split(".");
  const rows = Array(slots[1]).join(".").split(".");

  return (
    <div className={`Inventory ${small && "is-small"}`}>
      {cols.map((col, colIdx) => (
        <div key={colIdx} className="Inventory-row">
          {rows.map((row, rowIdx) => (
            <div key={`${colIdx}-${rowIdx}`} className="Inventory-slot">
              {value && Object.keys(value)[rowIdx] && (
                <Ingredient
                  disableDrag={disableDrag}
                  value={Object.keys(value)[rowIdx]}
                  quantity={Object.values(value)[rowIdx]}
                  location={location}
                />
              )}

              {icon && <span className="Inventory-icon">{icon}</span>}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Inventory;
