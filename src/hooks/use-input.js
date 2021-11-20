import { useState } from "react";

//since all input fields have almost identical algorithms, I am outsourcing them and making one general algorithm that does all the work:

const useInput = (typeOfInput) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [inputFieldIsTouched, setInputFieldIsTouched] = useState(false);

  let valueIsValid = false;
  if (typeOfInput === "text" || typeOfInput === "number") {
    valueIsValid = enteredValue.trim() !== "";
  } else if (typeOfInput === "email") {
    valueIsValid =
      enteredValue.trim() !== "" &&
      enteredValue.includes("@") &&
      enteredValue.includes(".");
  }

  const valueHasError = !valueIsValid && inputFieldIsTouched;

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const inputBlurHandler = () => {
    setInputFieldIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setInputFieldIsTouched(false);
  };

  return {
    value: enteredValue,
    valueIsValid,
    valueHasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
