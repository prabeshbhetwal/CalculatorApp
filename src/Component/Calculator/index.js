import { useState } from "react";
import { Button } from "./Button";
import { evaluate } from "mathjs";
import { inject } from "@vercel/analytics";

inject();

export const Calculator = () => {
  const operators = ["+", "-", "%", "*", "/"];
  const buttons = [
    {
      className: "ac",
      label: "AC",
    },
    {
      className: "c",
      label: "←",
    },
    {
      className: "perc",
      label: "%",
    },
    {
      className: "divide",
      label: "/",
    },
    {
      className: "7",
      label: "7",
    },
    {
      className: "8",
      label: "8",
    },
    {
      className: "9",
      label: "9",
    },
    {
      className: "x",
      label: "*",
    },
    {
      className: "4",
      label: "4",
    },
    {
      className: "5",
      label: "5",
    },
    {
      className: "6",
      label: "6",
    },
    {
      className: "minus",
      label: "-",
    },
    {
      className: "1",
      label: "1",
    },
    {
      className: "2",
      label: "2",
    },
    {
      className: "3",
      label: "3",
    },
    {
      className: "plus",
      label: "+",
    },
    {
      className: "0",
      label: "0",
    },
    {
      className: "dot",
      label: ".",
    },
    {
      className: "equals",
      label: "=",
    },
  ];

  const [displayValue, setDisplayValue] = useState("0");

  const handleButton = (value) => {
    if (value === "AC") return setDisplayValue("0");

    if (value === "←") {
      setDisplayValue((prevDisplay) =>
        prevDisplay.length === 1 ? "0" : prevDisplay.slice(0, -1)
      );
    } else if (value === "=") {
      try {
        const result = evaluate(displayValue);
        setDisplayValue(result.toString());
      } catch (error) {
        alert("Sorry, the calculation is wrong. Please check!");
      }
    } else {
      setDisplayValue((prevDisplay) => {
        if (prevDisplay === "0" && !operators.includes(prevDisplay.slice(-1))) {
          return value;
        } else if (
          operators.includes(prevDisplay.slice(-1)) &&
          operators.includes(value)
        ) {
          return prevDisplay.slice(0, -1) + value;
        } else {
          return prevDisplay + value;
        }
      });
    }
  };

  return (
    <div className="wrapper">
      <div className="calculator">
        <div className="display">{displayValue}</div>
        {buttons.map((item, index) => (
          <Button
            key={index}
            className={item.className}
            label={item.label}
            handleButton={handleButton}
          />
        ))}
      </div>
    </div>
  );
};
