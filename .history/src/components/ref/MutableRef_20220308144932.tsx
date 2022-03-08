import React, { useState, useEffect, useRef } from "react";

const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const interValRef = useRef<number | undefined>(undefined);

  const stopTimer = () => {
    window.clearInterval(interValRef.current);
  };
  useEffect(() => {
    interValRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1);

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
export default MutableRef;
