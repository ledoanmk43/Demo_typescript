import React, { useRef, useEffect } from "react";

const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus(); //focus element when component mouted
  }, []);

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        style={{ padding: "20px", backgroundColor: "red" }}
      />
    </div>
  );
};

export default DomRef;
