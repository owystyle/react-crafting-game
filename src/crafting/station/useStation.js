import { useEffect, useState, useCallback } from "react";
import useGame from "../../store/useGame";
import useProgress from "../../hooks/useProgress";
import { findRecipe } from "./helpers";

function useStation(props) {
  const { name: stationName, input, output } = props;
  const [store, dispatch] = useGame();
  const [status, setStatus] = useState("standby");
  const [progress, startProgress] = useProgress();

  const storageExists = useCallback(
    (name) => {
      const storageInputName = `${stationName}-${name}`;
      if (!store[storageInputName]) return;

      return Object.keys(store[storageInputName]).length > 0;
    },
    [store, stationName]
  );

  useEffect(() => {
    if (!storageExists("input")) return;
    if (progress) return;

    const { name, recipe } = findRecipe(output, store[`${stationName}-input`]);

    if (!name) return;

    // if (!catAddToStorageOutput(name, recipe.quantity)) {
    //   setStatus("output full");
    //   return;
    // }

    dispatch({
      type: "remove-from-storage",
      location: `${stationName}-input`,
      payload: recipe.ingredients,
    });
    dispatch({
      type: "add-to-storage",
      location: `${stationName}-running`,
      payload: recipe.ingredients,
    });

    const callback = () => {
      dispatch({
        type: "add-to-storage",
        location: `${stationName}-output`,
        payload: { [name]: recipe.quantity },
      });
      dispatch({
        type: "remove-from-storage",
        location: `${stationName}-running`,
        payload: recipe.ingredients,
      });
      setStatus("standby");
    };

    startProgress(recipe.duration, callback);
  }, [
    store,
    dispatch,
    output,
    progress,
    startProgress,
    stationName,
    storageExists,
  ]);

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e) => {
    const ingredient = e.dataTransfer.getData("ingredient");
    const location = e.dataTransfer.getData("location");

    if (location !== "warehouse") return;
    if (!input.includes(ingredient)) return;

    // if (!catAddToStorageInput(ingredient, 1)) {
    //   setStatus("input full");
    //   return;
    // }

    dispatch({
      type: "remove-from-storage",
      location: "warehouse",
      payload: { [ingredient]: 1 },
    });
    dispatch({
      type: "add-to-storage",
      location: `${stationName}-input`,
      payload: { [ingredient]: 1 },
    });
  };

  return { progress, store, onDragOver, onDrop, status };
}

export default useStation;
