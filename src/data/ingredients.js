import iconStone from "../assets/miningIcons_05_t.png";
import iconWood from "../assets/wd_t_03.png";
import iconIron from "../assets/miningIcons_10_t.png";
import iconGem from "../assets/miningIcons_90_t.png";
import iconWoodStick from "../assets/wd_t_01.png";
import iconStoneBlock from "../assets/miningIcons_80_t.png";
import iconCoal from "../assets/miningIcons_97_t.png";
import iconIronStick from "../assets/bracers_3.PNG";
import iconGoldOre from "../assets/ore-gold.png";
import iconGoldBar from "../assets/bar-gold.png";
import iconGoldRing from "../assets/rings_1.PNG";

export default [
  {
    name: "wood",
    icon: iconWood,
    info: {
      title: "Wood Stick",
    },
  },
  {
    name: "stone",
    icon: iconStone,
    info: {
      title: "Wood Stick",
    },
  },
  {
    name: "iron",
    icon: iconIron,
    info: {
      title: "Wood Stick",
    },
  },
  {
    name: "gem",
    icon: iconGem,
    info: {
      title: "Wood Stick",
    },
  },
  {
    name: "wood-stick",
    icon: iconWoodStick,
    info: {
      title: "Wood Stick",
    },
    recipe: {
      quantity: 10,
      duration: 2000,
      ingredients: {
        wood: 1,
      },
    },
  },
  {
    name: "stone-block",
    icon: iconStoneBlock,
    info: {
      title: "Stone Block",
    },
    recipe: {
      quantity: 1,
      duration: 4000,
      ingredients: {
        stone: 2,
      },
    },
  },
  {
    name: "coal",
    icon: iconCoal,
    info: {
      title: "Coal",
    },
    recipe: {
      quantity: 10,
      duration: 2000,
      ingredients: {
        wood: 1,
        // stone: 1,
      },
    },
  },
  {
    name: "iron-stick",
    icon: iconIronStick,
    info: {
      title: "Iron Stick",
    },
    recipe: {
      quantity: 1,
      duration: 2000,
      ingredients: {
        iron: 1,
      },
    },
  },
  {
    name: "gold-ore",
    icon: iconGoldOre,
    info: {
      title: "Gold Ore",
    },
  },
  {
    name: "gold-bar",
    icon: iconGoldBar,
    info: {
      title: "Gold Ore",
    },
    recipe: {
      quantity: 1,
      duration: 2000,
      ingredients: {
        "gold-ore": 1,
      },
    },
  },
  {
    name: "gold-ring",
    icon: iconGoldRing,
    info: {
      title: "Gold Ring",
    },
    recipe: {
      quantity: 1,
      duration: 10000,
      ingredients: {
        "gold-bar": 1,
      },
    },
  },
];
