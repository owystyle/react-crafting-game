export default [
  {
    // todo add level
    // todo add energy / fire

    // maybe input can be removed by
    // checking what recipes need as ingredients

    name: "furnace",
    input: ["stone", "wood"],
    output: ["stone-block", "coal"],
  },
  {
    name: "sawmill",
    input: ["wood"],
    output: ["wood-stick"],
  },
  {
    name: "blacksmith",
    input: ["iron"],
    output: ["iron-stick"],
  },
];
