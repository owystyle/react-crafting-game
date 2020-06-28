import { useEffect, useState } from "react";
import useInventory from "../../hooks/useInventory";
import useProgress from "../../hooks/useProgress";
import { findRecipe } from "./helpers";

function useStation(props) {
  const { input, output, onDropIngredient, onFinish } = props;
  const [status, setStatus] = useState("standby");
  const [progress, startProgress] = useProgress();
  const [
    storageInput,
    addToStorageInput,
    removeFromStorageInput,
    catAddToStorageInput,
  ] = useInventory();
  const [
    storageOutput,
    addToStorageOutput,
    removeFromStorageOutput,
    catAddToStorageOutput,
  ] = useInventory();

  useEffect(() => {
    if (storageInput.length > 0 && !progress) {
      const { name, recipe } = findRecipe(output, storageInput);
      if (!name) return;

      if (!catAddToStorageOutput(name, recipe.quantity)) {
        setStatus("output full");
        return;
      }

      startProgress(recipe.duration, () => {
        // onFinish(name, recipe.quantity);
        addToStorageOutput(name, recipe.quantity);
        removeFromStorageInput(recipe.ingredients);
        setStatus("standby");
      });
    }
  }, [storageInput]);

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e) => {
    const ingredient = e.dataTransfer.getData("ingredient");
    const location = e.dataTransfer.getData("location");

    if (location !== "warehouse") return;
    if (!input.includes(ingredient)) return;

    if (!catAddToStorageInput(ingredient, 1)) {
      setStatus("input full");
      return;
    }

    onDropIngredient({ [ingredient]: 1 });
    addToStorageInput(ingredient, 1);
  };

  const storage = {
    input: storageInput,
    output: storageOutput,
  };

  return { progress, storage, onDragOver, onDrop, status };
}

export default useStation;
