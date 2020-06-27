import { useState, useRef } from "react";
import useInterval from "./useInterval";

const fps = 60;
const delay = 1000 / fps;
const totalTime = 1000;
const totalProgress = 100;

function useProgress() {
  const [initialProgress] = useState(totalProgress);
  const [progress, setProgress] = useState(initialProgress);
  const [isRunning, setIsRunning] = useState(false);
  const callbackDone = useRef(null);

  useInterval(
    () => {
      const amount = initialProgress / (totalTime / delay);
      setProgress(progress - amount);

      if (progress <= 0) {
        setIsRunning(false);
        setProgress(100);
        callbackDone.current();
      }
    },
    isRunning ? delay : null
  );

  const startProgress = (callback) => {
    setIsRunning(true);
    callbackDone.current = callback;
  };

  return [isRunning && progress, startProgress];
}

export default useProgress;
