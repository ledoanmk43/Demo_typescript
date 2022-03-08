import React, { useState, useEffect, useRef } from "react";

export const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const interValRef = useRef(null);

  return <div>MutableRef</div>;
};
