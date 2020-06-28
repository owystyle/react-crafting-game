import React from "react";
import Ingredient from "../ingredient/Ingredient";
import "./Inventory.css";

function Inventory(props) {
  const { slots, value } = props;
  const cols = Array(slots[0]).join(".").split(".");
  const rows = Array(slots[1]).join(".").split(".");

  return (
    <div className="Inventory">
      {cols.map((col, colIdx) => (
        <div key={colIdx} className="Inventory-row">
          {rows.map((row, rowIdx) => (
            <div key={`${colIdx}-${rowIdx}`} className="Inventory-slot">
              {value && value[rowIdx] && <Ingredient {...value[rowIdx]} />}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Inventory;
