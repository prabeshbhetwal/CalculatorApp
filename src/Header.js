import { useState } from "react";
import { SubmitForm } from "./Component/SubmitForm";
import { Realtime } from "./Component/Realtime";
import { Display } from "./Component/Display";

export const Header = () => {
  //   const [counter, setCounter] = useState(0);
  //   const handleIncrement = () => {
  //     setCounter(counter + 2);
  //   };

  //   const handleDecrement = () => {
  //     setCounter(counter - 1);
  //   };

  //   const resetCounter = () => {
  //     setCounter(0);
  //   };

  // eslint-disable-next-line no-unused-vars
  const [textValue, setTextValue] = useState("");
  const handleChange = (e) => {
    setTextValue(e.target.value);
  };
  const onSubmitValue = (e) => {
    //removes the default refresh behaviour
    e.preventDefault();
  };

  const [submitValue, setSubmitValue] = useState();
  const handleSubmit = () => {
    setSubmitValue(textValue);
  };
  return (
    <>
      {/* <h1>Counter Application</h1>
      <h5>Initial Value: {counter}</h5>

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={resetCounter}>Reset</button> */}

      {/* <h1> Controlled Input Field</h1> */}
      {/* 
      <form onSubmit={onSubmitValue}>
        <input type="text" value={textValue} onChange={handleChange} />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
        <h1>Real-time Typing: {textValue}</h1>
        <h4>Text after Submit: {submit}</h4>
      </form> */}

      {/* <hr /> */}
      <h1>Props and Components</h1>
      <SubmitForm
        textValue={textValue}
        onSubmitValue={onSubmitValue}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Realtime textValue={textValue} />
      <Display submitValue={submitValue} />
    </>
  );
};
