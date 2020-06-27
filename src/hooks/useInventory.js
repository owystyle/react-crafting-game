import { useState } from "react";

function useInventory() {
  const [inventory, setInventory] = useState([
    { value: "wood", quantity: 10 },
    { value: "stone", quantity: 10 },
    { value: "iron", quantity: 10 },
  ]);

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

  const removeFromInventory = (name, quantity) => {
    setInventory((inv) => {
      const inventoryAfter = inv.map((item) => {
        return item.value === name
          ? { ...item, quantity: item.quantity - quantity }
          : item;
      });

      return inventoryAfter.filter((item) => item.quantity !== 0);
    });
  };

  return { inventory, addToInventory, removeFromInventory };
}

export default useInventory;
