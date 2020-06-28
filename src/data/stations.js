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
    title: "FUR",
    icon: iconFurnace,
    input: ["stone", "wood"],
    output: ["stone-block", "coal"],
  },
  {
    name: "sawmill",
    title: "SAW",
    icon: iconSawmill,
    input: ["wood"],
    output: ["wood-stick"],
  },
  {
    name: "blacksmith",
    title: "BLA",
    icon: iconBlacksmith,
    input: ["iron"],
    output: ["iron-stick"],
  },
  {
    name: "assembly",
    title: "ASM",
    icon: iconBlacksmith,
    input: ["iron"],
    output: ["iron-stick"],
  },
];
