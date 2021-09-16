import React, { useEffect, useRef, useState } from "react";

const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const interValRef = useRef<number | null>(null);

  const stopTimer = () => {
    // Checking the type to make sure its not undefined
    if (interValRef.current) {
      window.clearInterval(interValRef.current);
    }
  };

  useEffect(() => {
    interValRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);

    // unmounts
    return () => {
      stopTimer();
    };
  }, []);

  return <></>;
};

export default MutableRef;
