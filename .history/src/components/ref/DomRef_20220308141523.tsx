import React, { useRef, useEffect } from "react";

const DomRef = () => {
  const inputRef = useRef<>(null);

  useEffect(() => {
    inputRef.current?.focus(); //focus element when component mouted
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default DomRef;
