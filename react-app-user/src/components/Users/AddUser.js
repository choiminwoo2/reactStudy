import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnterdAge] = useState("");
  const [error,setError] = useState();
  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
        setError({
            title : 'Invalid input',
            message : 'Please enter a valid name and age (non-empty values)'
        })
      return;
    }

    if (+enteredAge < 1) {
        setError({
            title : 'Invalid age',
            message : 'Please enter a valid age (> 0).'
        })
      return;
    }
    const useData = {
      username: enteredName,
      age: enteredAge,
      id: Math.random().toString(),
    };
    props.getUserData(useData);
    setEnterdAge("");
    setEnteredName("");
  };
  const usernameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setEnterdAge(e.target.value);
  };

  const errorHandler = () =>{
    setError(null);
  }
  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">유저 이름</label>
          <input
            type="text"
            id="usernmae"
            onChange={usernameChangeHandler}
            value={enteredName}
          />
          <label htmlFor="age">나이</label>
          <input
            type="text"
            id="age"
            onChange={ageChangeHandler}
            value={enteredAge}
          />
          <Button type="submit">유저 추가</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
