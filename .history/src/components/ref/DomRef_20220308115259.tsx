import React, { useRef, useEffect } from "react";

const DomRef = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <div>DomRef</div>;
};

export default DomRef;
