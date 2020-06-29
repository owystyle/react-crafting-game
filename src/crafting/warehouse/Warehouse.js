import React, { useCallback } from "react";
import useGame from "../../store/useGame";
import "./Warehouse.css";

function Warehouse(props) {
  const { children } = props;
  const [, dispatch] = useGame();

  const onDrop = useCallback(
    (e) => {
      const ingredient = e.dataTransfer.getData("ingredient");
      const quantity = +e.dataTransfer.getData("quantity");
      const location = e.dataTransfer.getData("location");

      console.log(location);

      if (!ingredient) return;
      if (!quantity) return;
      if (location === "warehouse") return;

      dispatch({
        type: "remove-from-storage",
        location,
        payload: { [ingredient]: quantity },
      });
      dispatch({
        type: "add-to-storage",
        location: "warehouse",
        payload: { [ingredient]: quantity },
      });
    },
    [dispatch]
  );

  return (
    <div
      className="Warehouse"
      onDragOver={(e) => e.preventDefault()}
      onDrop={onDrop}
    >
      {children}
    </div>
  );
}

export default Warehouse;
