import React, { useEffect } from "react";
import Station from "./station/Station";
import Warehouse from "./warehouse/Warehouse";
import Ingredient from "./ingredient/Ingredient";
import stationsData from "../data/stations";
import useGame from "../store/useGame";
import "./Crafting.css";

function Crafting() {
  const [store] = useGame();

  useEffect(() => {
    console.log("store", store);
  }, [store]);

  return (
    <div className="Crafting">
      <div className="Crafting-room">
        {stationsData.map((item) => (
          <Station key={item.name} {...item} />
        ))}
      </div>

      <Warehouse>
        {store.warehouseAll.map((item) => (
          <div key={item}>
            <Ingredient
              value={item}
              quantity={store.warehouse[item]}
              location="warehouse"
            />
          </div>
        ))}
      </Warehouse>
    </div>
  );
}

export default Crafting;
