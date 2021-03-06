import React, { useState, useEffect, useRef } from "react";

export const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const interValRef = useRef(null);

  const stopTimer = () => {
    window.clearTimeout(interValRef.current);
  };
  useEffect(() => {
    interValRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);

    return () => {
      stopTimer();
    };
  }, []);

  return (
    <div>
      {timer}
      <button onClick={() => stopTimer()}>Stop Timer</button>
    </div>
  );
};
