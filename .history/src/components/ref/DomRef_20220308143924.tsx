import React, { useRef, useEffect } from "react";

const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current.focus(); //focus element when component is mouted
  }, []);

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        placeholder="Enter..."
        style={{
          padding: "5px 20px",
          backgroundColor: "#ccc",
          borderRadius: "5px",
        }}
      />
    </div>
  );
};

export default DomRef;
