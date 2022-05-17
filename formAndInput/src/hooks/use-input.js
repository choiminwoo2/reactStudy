import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const valueChangeHanlder = (event) => {
    setEnteredValue(event.target.value);
  };

  const reset = () =>{
      setEnteredValue('');
      setIsTouched(false);
  }
  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    inputBlurHandler,
    valueChangeHanlder,
    reset
  };
};

export default useInput;
