import React, { useEffect, useRef } from "react";

const FocusInput = () => {
  // non-null assertion when invoking useRef (adding exclaimation sign)
  // so that we do not need optional chaining in inputRef.current?.focus();
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
};

export default FocusInput;
