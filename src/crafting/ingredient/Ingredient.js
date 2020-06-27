import React from "react";
import ingredientsData from "../../data/ingredients";
import "./Ingredient.css";

function Ingredient(props) {
  const { value, quantity } = props;
  const ingredient = ingredientsData.find((item) => item.name === value);
  const { name, icon } = ingredient;

  const onDragStart = (e) => {
    e.dataTransfer.setData("ingredient", name);
    console.log("start", name);
  };

  return (
    <div className="Ingredient" draggable="true" onDragStart={onDragStart}>
      <img src={icon} draggable="false" alt="" />x {quantity}
    </div>
  );
}

export default Ingredient;
