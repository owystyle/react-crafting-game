import { useState, useCallback, useMemo } from "react";

function useInventory(defaultState = []) {
  const [storage, setStorage] = useState(defaultState);

  const addToStorage = useCallback(
    (name, quantity) => {
      setStorage((lastStorage) => {
        const storageAfter = lastStorage.map((item) => {
          return item.value === name
            ? { ...item, quantity: item.quantity + quantity }
            : item;
        });

        const itemFound = storageAfter.find((item) => item.value === name);

        return itemFound
          ? storageAfter
          : [...storageAfter, { value: name, quantity }];
      });
    },
    [setStorage]
  );

  const removeFromStorage = useCallback(
    (items) => {
      Object.keys(items).forEach((name, idx) => {
        const quantity = Object.values(items)[idx];

        setStorage((lastStorage) => {
          const storageAfter = lastStorage.map((item) => {
            return item.value === name
              ? { ...item, quantity: item.quantity - quantity }
              : item;
          });

          return storageAfter.filter((item) => item.quantity !== 0);
        });
      });
    },
    [setStorage]
  );

  const catAddToStorage = useCallback(
    (value, quantity) => {
      const valueExists = storage.find((itm) => itm.value === value);
      const storageFull = storage.length === 1;

      return valueExists ? true : !storageFull;
    },
    [storage]
  );

  return [storage, addToStorage, removeFromStorage, catAddToStorage];
}

export default useInventory;
