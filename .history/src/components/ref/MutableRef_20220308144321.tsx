import React, { useState, useEffect, useRef } from "react";

export const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const interValRef = useRef(null);

  const stopTimer = () => {
    window.clearTimeout(interValRef.current);
  };
  useEffect(() => {
    interValRef.current = window.setInterval(() => {
      setTimeout((timer) => timer + 1);
    }, 1000);

    return () => {};
  }, [third]);

  return <div>MutableRef</div>;
};
