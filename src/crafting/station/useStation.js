import { useState } from "react";
import useProgress from "../../hooks/useProgress";
import ingredientsData from "../../data/ingredients";

function useStation(props) {
  const { input, output, onStart, onFinish } = props;
  const [progress, startProgress] = useProgress();
  const [queue, setQueue] = useState([]);

  const craftItem = (ingredient) => {
    if (!output) return;

    console.log("Craft with", ingredient);
    console.log("Recipes", output);
    console.log("Begin output ....");

    let finalRecipe = null;

    output.forEach((recipeName) => {
      const ingredientToDo = ingredientsData.find(
        (item) => item.name === recipeName
      );

      const ingredientFound = ingredientToDo.recipe.ingredients.find(
        (item) => item.name === ingredient
      );

      //! Daca 2 retete au ingredientul, vor fi scoase 2 iteme
      if (ingredientFound) {
        finalRecipe = ingredientToDo.name;
        onFinish(finalRecipe, ingredientToDo.recipe.quantity);
      }
    });

    setQueue([]);
    console.log("End output ....");
    console.log(finalRecipe, "crafted");
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e) => {
    const ingredient = e.dataTransfer.getData("ingredient");
    if (!input.includes(ingredient)) return;
    if (progress) return;

    setQueue([...queue, { value: ingredient, quantity: 1 }]);
    onStart(ingredient, 1);
    startProgress(() => craftItem(ingredient));
  };

  return { progress, queue, onDragOver, onDrop };
}

export default useStation;
