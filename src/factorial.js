import React, { useState, useMemo } from "react";

function FactorialCalculator() {
  const [number, setNumber] = useState(5); // Initial number
  const [otherState, setOtherState] = useState("Initial Value"); // New state variable

  const calculateFactorial = (num) => {
    console.log("calculateFactorial called");
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
      factorial *= i;
    }
    return factorial;
  };

  const factorial = useMemo(() => calculateFactorial(number), [number]);

  const handleClick = () => {
    // Update the state variable to trigger a re-render
    setOtherState("Updated Value");
  };

  return (
    <div>
      <div>
        Factorial of {number} is {factorial}
      </div>
      <div>Other State: {otherState}</div>
      <button onClick={handleClick}>Update State</button>
    </div>
  );
}

export default FactorialCalculator;
