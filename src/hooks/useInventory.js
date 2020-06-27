import { useState } from "react";

function useInventory(defaultState = []) {
  const [inventory, setInventory] = useState(defaultState);

  const addToInventory = (name, quantity) => {
    setInventory((inv) => {
      const inventoryAfter = inv.map((item) => {
        return item.value === name
          ? { ...item, quantity: item.quantity + quantity }
          : item;
      });

      const itemFound = inventoryAfter.find((item) => item.value === name);

      return itemFound
        ? inventoryAfter
        : [...inventoryAfter, { value: name, quantity }];
    });
  };

  const removeFromInventory = (items) => {
    Object.keys(items).forEach((name, idx) => {
      const quantity = Object.values(items)[idx];

      setInventory((inv) => {
        const inventoryAfter = inv.map((item) => {
          return item.value === name
            ? { ...item, quantity: item.quantity - quantity }
            : item;
        });

        return inventoryAfter.filter((item) => item.quantity !== 0);
      });
    });
  };

  return [inventory, addToInventory, removeFromInventory];
}

export default useInventory;
