export const initialState = {
  warehouse: {
    wood: 10,
    stone: 10,
    iron: 5,
    "gold-ore": 5,
  },
  warehouseAll: ["wood", "stone", "iron", "gold-ore"],
};

const addToStorage = (state, action) => {
  const location = action.location;
  const payload = action.payload;

  const locationAfter = Object.keys(payload).reduce(
    (acc, name, idx) => {
      const quantity = Object.values(payload)[idx];

      acc[name] = (acc[name] || 0) + quantity;

      return acc;
    },
    { ...state[location] }
  );

  return {
    ...state,
    [location]: {
      ...locationAfter,
    },
    [`${location}All`]: Object.keys(locationAfter),
  };
};

const removeFromStorage = (state, action) => {
  const location = action.location;
  const payload = action.payload;

  const locationAfter = Object.keys(payload).reduce(
    (acc, name, idx) => {
      const quantity = Object.values(payload)[idx];

      acc[name] -= quantity;

      if (acc[name] < 1) {
        delete acc[name];
      }

      return acc;
    },
    { ...state[location] }
  );

  return {
    ...state,
    [location]: {
      ...locationAfter,
    },
    [`${location}All`]: Object.keys(locationAfter),
  };
};

const moveToStorage = (state, action) => {
  const removed = removeFromStorage(state, {
    ...action,
    location: action.from,
  });
  const added = addToStorage(state, { ...action, location: action.to });

  return {
    ...added,
  };
};

export function reducer(state, action) {
  switch (action.type) {
    case "add-to-storage":
      return addToStorage(state, action);

    case "remove-from-storage":
      return removeFromStorage(state, action);

    case "move-to-storage":
      return moveToStorage(state, action);

    default:
      throw new Error();
  }
}
