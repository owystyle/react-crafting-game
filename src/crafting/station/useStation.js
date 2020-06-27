import { useEffect } from "react";
import useInventory from "../../hooks/useInventory";
import useProgress from "../../hooks/useProgress";
import { findRecipe } from "./helpers";

function useStation(props) {
  const { input, output, onDropIngredient, onFinish } = props;
  const [progress, startProgress] = useProgress();
  const [storage, addToStorage, removeFromStorage] = useInventory();

  useEffect(() => {
    if (storage.length > 0 && !progress) {
      const { name, recipe } = findRecipe(output, storage);
      if (!name) return;

      startProgress(recipe.duration, () => {
        onFinish(name, recipe.quantity);
        removeFromStorage(recipe.ingredients);
      });
    }
  }, [storage]);

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e) => {
    const ingredient = e.dataTransfer.getData("ingredient");
    if (!input.includes(ingredient)) return;

    onDropIngredient({ [ingredient]: 1 });
    addToStorage(ingredient, 1);
  };

  return { progress, storage, onDragOver, onDrop };
}

export default useStation;
