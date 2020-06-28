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

  const onDrop = (e) => {
    const ingredient = e.dataTransfer.getData("ingredient");
    const quantity = +e.dataTransfer.getData("quantity");
    const location = e.dataTransfer.getData("location");

    if (!ingredient) return;
    if (!quantity) return;

    addToInventory(ingredient, quantity);
  };

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
        onDrop={onDrop}
      >
        {inventory.map((item, idx) => (
          <div key={idx}>
            <Ingredient {...item} location="warehouse" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Crafting;
