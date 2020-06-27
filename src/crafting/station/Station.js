import React from "react";
import useStation from "./useStation";
import "./Station.css";

function Station(props) {
  const { name } = props;
  const { progress, storage, onDragOver, onDrop, isAllowed } = useStation(
    props
  );

  return (
    <div
      className={`Station ${isAllowed && "is-over"}`}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      {progress && (
        <div className="Station-progress" style={{ width: `${progress}%` }} />
      )}

      <div className="Station-info">
        <h2>{name}</h2>
        {storage.map((item, idx) => (
          <p key={idx}>
            {item.value} x {item.quantity}
          </p>
        ))}

        {storage.length <= 0 && <p>Empty</p>}
      </div>
    </div>
  );
}

export default Station;
