import { useState, useEffect } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid : enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHanlder: nameChangeHanlder,
    inputBlurHandler: nameBlurHandler,
    reset : resetNameInput
  } = useInput(value=> value.trim() !== '');
  
  const {
    value : enteredEmail,
    isValid : enteredEmailIsValid,
    hasError : emailInputHasError,
    valueChangeHanlder : emailChangeHandler,
    inputBlurHandler : emailBlurHandler,
    reset : resetEmailInput
  } = useInput(value=>value.includes("@") )
  // const [enteredName, setEnteredName] = useState("");
  // const [enteredNameTouch, setEnteredNameTouch] = useState(false);
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  // const enteredNameIsValid = enteredName.trim() !== "";
  // const nameInputIdValid = !enteredNameIsValid && enteredNameTouch;

  // const enteredEmailIsValid = enteredEmail.includes("@");
  // const enteredEmailIsInValid = !enteredEmailIsValid && enteredEmailTouched;

  useEffect(() => {
    if (enteredNameIsValid && enteredEmailIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [enteredNameIsValid, enteredEmailIsValid]);

  // const nameInputBlurHandler = (event) => {
  //   setEnteredNameTouch(true);
  // };

  // const nameInputChangeHanlder = (event) => {
  //   setEnteredName(event.target.value);
  // };

  // const emailInputChangeHanlder = (event) => {
  //   setEnteredEmail(event.target.value);
  // };

  // const emailInputBlurHandler = (event) => {
  //   setEnteredEmailTouched(true);
  // };
  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    resetNameInput();

    resetEmailInput();
    // setEnteredEmail("");
    // setEnteredEmailTouched(false);
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHanlder}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Plase enter is empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
