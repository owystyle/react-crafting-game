import React from "react";
import Station from "./station/Station";
import Ingredient from "./ingredient/Ingredient";
import useInventory from "../hooks/useInventory";
import stationsData from "../data/stations";
import "./Crafting.css";

function Crafting(props) {
  const [inventory, addToInventory, removeFromInventory] = useInventory([
    { value: "wood", quantity: 10 },
    { value: "stone", quantity: 10 },
    { value: "iron", quantity: 10 },
  ]);

  return (
    <div className="Crafting">
      <div className="Crafting-room">
        {stationsData.map((item) => (
          <Station
            key={item.name}
            {...item}
            onDropIngredient={(...args) => removeFromInventory(...args)}
            onFinish={(...args) => addToInventory(...args)}
          />
        ))}
      </div>

      <div
        className="Crafting-ingredients"
        onDragOver={(e) => e.preventDefault()}
      >
        {inventory.map((item, idx) => (
          <Ingredient key={idx} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Crafting;
