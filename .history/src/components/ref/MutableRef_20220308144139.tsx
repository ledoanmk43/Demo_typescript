import React, { useState, useEffect, useRef } from "react";

export const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const interValRef = useRef(null);

  const stopTimer = () => {
    window.clearTimeout(interValRef);
  };

  return <div>MutableRef</div>;
};
