import iconFurnace from "../assets/en_craft_62.png";
import iconBlacksmith from "../assets/anvil_t_01.png";
import iconSawmill from "../assets/engeniring_19_t.png";

export default [
  {
    // todo add level
    // todo add energy / fire

    // maybe input can be removed by
    // checking what recipes need as ingredients

    name: "furnace",
    title: "FURNACE",
    icon: iconFurnace,
    input: ["stone", "wood", "gold-ore"],
    output: ["stone-block", "coal", "gold-bar"],
    color: "#b3b0a9",
  },
  {
    name: "sawmill",
    title: "SAWMILL",
    icon: iconSawmill,
    input: ["wood"],
    output: ["wood-stick"],
    color: "#d6c48d",
  },
  {
    name: "blacksmith",
    title: "BLACKSMITH",
    icon: iconBlacksmith,
    input: ["iron", "gold-bar"],
    output: ["iron-stick", "gold-ring"],
    color: "#5a5f84",
  },
];
