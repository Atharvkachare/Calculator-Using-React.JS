import { useState, useEffect } from "react";
import Button from "./Button";
import Display from "./Display";
import { calculateExpression, isValidInput } from "../utils/calculator";

function Calculator() {
  const [value, setValue] = useState("");

  const handleClick = (val) => {
    if (val === "AC") return setValue("");
    if (val === "DE") return setValue((prev) => prev.slice(0, -1));
    if (val === "=") return setValue(calculateExpression(value));

    if (isValidInput(value, val)) {
      setValue((prev) => prev + val);
    }
  };

  // 🔥 Keyboard Support
  useEffect(() => {
    const handleKeyDown = (e) => {
      const allowedKeys = "0123456789+-*/.";

      if (allowedKeys.includes(e.key)) {
        handleClick(e.key);
      }

      if (e.key === "Enter") {
        handleClick("=");
      }

      if (e.key === "Backspace") {
        handleClick("DE");
      }

      if (e.key === "Escape") {
        handleClick("AC");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [value]);

  const buttons = [
    "AC", "DE", ".", "/",
    "7", "8", "9", "*",
    "4", "5", "6", "+",
    "1", "2", "3", "-",
    "00", "0", "=",
  ];

  return (
    <div className="calculator">
      <form onSubmit={(e) => e.preventDefault()}>
        <Display value={value} onChange={setValue} />
        <div className="buttons">
          {buttons.map((btn, index) => (
            <Button
              key={index}
              value={btn}
              onClick={handleClick}
              className={btn === "=" ? "equal" : ""}
            />
          ))}
        </div>
      </form>
    </div>
  );
}

export default Calculator;
