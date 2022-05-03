import React, { useRef, useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error,setError] = useState();
  const addUserHandler = (e) => {
    e.preventDefault();
    //ref는 돔에 직접 접근하는 방식으로 리액트에서 처리하고 있지 않는다.
    //DOM API를 사용가능하게 된다.
    const enteredUserName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
        setError({
            title : 'Invalid input',
            message : 'Please enter a valid name and age (non-empty values)'
        })
      return;
    }

    if (+enteredUserAge < 1) {
        setError({
            title : 'Invalid age',
            message : 'Please enter a valid age (> 0).'
        })
      return;
    }
    const useData = {
      username: enteredUserName,
      age: enteredUserAge,
      id: Math.random().toString(),
    };
    
    props.getUserData(useData);
    nameInputRef.current.value = '';
    ageInputRef.current.value='';
  };
  // const usernameChangeHandler = (e) => {
  //   setEnteredName(e.target.value);
  // };
  // const ageChangeHandler = (e) => {
  //   setEnterdAge(e.target.value);
  // };

  const errorHandler = () =>{
    setError(null);
  }
  return (
    <React.Fragment>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">유저 이름</label>
          {/* REF를 사용하면 제외되지 않는 컴포넌트 : 리액트를 사용하지 않고 DOM에 직접 접근하여 값을 직접적으로 사용한다. */}
          <input
            type="text"
            id="usernmae"
            // onChange={usernameChangeHandler}
            // value={nameInputRef}
            ref={nameInputRef}
          />
          <label htmlFor="age">나이</label>
          <input
            type="text"
            id="age"
            // onChange={ageChangeHandler}
            // value={ageInputRef}
            ref={ageInputRef}
          />
          <Button type="submit">유저 추가</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
