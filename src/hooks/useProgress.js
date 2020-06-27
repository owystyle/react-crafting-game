import { useState, useRef } from "react";
import useInterval from "./useInterval";

const fps = 60;
const delay = 1000 / fps;

function useProgress() {
  const [initialProgress] = useState(100);
  const [progress, setProgress] = useState(initialProgress);
  const [isRunning, setIsRunning] = useState(false);
  const callbackRef = useRef(null);
  const durationRef = useRef(2000);

  useInterval(
    () => {
      const amount = initialProgress / (durationRef.current / delay);
      setProgress(progress - amount);

      if (progress <= 0) {
        setIsRunning(false);
        setProgress(100);
        callbackRef.current();
      }
    },
    isRunning ? delay : null
  );

  const startProgress = (duration, callback) => {
    setIsRunning(true);
    durationRef.current = duration;
    callbackRef.current = callback;
  };

  return [isRunning && progress, startProgress];
}

export default useProgress;
