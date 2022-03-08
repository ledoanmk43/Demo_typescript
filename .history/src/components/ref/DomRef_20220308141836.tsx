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
        placeholder="Enter..."
        style={{ padding: "5px 20px", backgroundColor: "#ccc" }}
      />
    </div>
  );
};

export default DomRef;
