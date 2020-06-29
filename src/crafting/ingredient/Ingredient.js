import React from "react";
import ingredientsData from "../../data/ingredients";
import "./Ingredient.css";

function Ingredient(props) {
  const { value, quantity, location, disableDrag, disableQuantity } = props;
  const ingredient = ingredientsData.find((item) => item.name === value);
  const { name, icon } = ingredient;

  const onDragStart = (e) => {
    if (disableDrag) return;

    e.dataTransfer.setData("ingredient", name);
    e.dataTransfer.setData("quantity", quantity);
    e.dataTransfer.setData("location", location);
  };

  return (
    <div
      className={`Ingredient ${disableDrag && "is-disabled"}`}
      draggable={!disableDrag}
      onDragStart={onDragStart}
    >
      <div className="Ingredient-content">
        <img src={icon} draggable="false" alt="" />
      </div>
      {!disableQuantity && (
        <div className="Ingredient-quantity">{quantity}</div>
      )}
    </div>
  );
}

export default Ingredient;
