import React from "react";
import useStation from "./useStation";
import "./Station.css";

function Station(props) {
  const { name } = props;
  const { progress, queue, onDragOver, onDrop } = useStation(props);

  return (
    <div className="Station" onDragOver={onDragOver} onDrop={onDrop}>
      {progress && (
        <div className="Station-progress" style={{ width: `${progress}%` }} />
      )}

      <div className="Station-info">
        <h2>{name}</h2>
        {queue.map((item, idx) => (
          <p key={idx}>
            {item.value} x {item.quantity}
          </p>
        ))}

        {queue.length <= 0 && <p>Empty</p>}
      </div>
    </div>
  );
}

export default Station;
