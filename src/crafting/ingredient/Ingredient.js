import React from "react";
import ingredientsData from "../../data/ingredients";
import "./Ingredient.css";

function Ingredient(props) {
  const { value, quantity, location } = props;
  const ingredient = ingredientsData.find((item) => item.name === value);
  const { name, icon } = ingredient;

  const onDragStart = (e) => {
    e.dataTransfer.setData("ingredient", name);
    e.dataTransfer.setData("quantity", quantity);
    e.dataTransfer.setData("location", location);
  };

  return (
    <div className="Ingredient" draggable="true" onDragStart={onDragStart}>
      <div className="Ingredient-content">
        <img src={icon} draggable="false" alt="" />
      </div>
      <div className="Ingredient-quantity">{quantity}</div>
    </div>
  );
}

export default Ingredient;
