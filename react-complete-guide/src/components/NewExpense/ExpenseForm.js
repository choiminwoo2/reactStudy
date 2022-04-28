import React, { useState } from "react";
import './ExprenseForm.css';
const ExpenseForm = (props) => {
    //Title State 스테이트는 구조 분해 할당 방식의 배열을 리턴 받고
    //첫번째 인자는 변수, 두번째 인자는 업데이트 역할을 하는 콜백 함수다.
    const [enteredTitle,setEnteredTitle] = useState('');
    //Amount State 입력받는 값은 숫자던 날자던 스트링 값을 받으므로 state의 초기값을 ''으로 선언한다.
    const [enteredAmount,setEnteredAmount] =useState('');
    const [enteredDate,setEnteredDate] = useState('');

    //useState 한번에 사용하는 방법 이런 업데이트 방식을 사용할 때 문제점이 발생할 수 있다.
    //이전 state 값의 의존하여 특정 상황에 문제가 발생할 수 있다.
    // const [userInput, setUserInput] =useState({
    //     enteredTitle : '',
    //     enteredAmount: '',
    //     enteredDate :''
    // });
    //타이틀 Change Event 여러개의 스테이트를 관리할 때는 모든 객체가 사라지지않도록
    // 객체를 복사한 이후에 바꿀 키를 바꿀 밸류로 오버라이드 해줘야한다.
    // 의존 문제를 해결하기 위해 콜백함수로 사용한다. 
    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle : event.target.value
        // })
    //     setUserInput(() => { 
    //         return {...prevState, enteredTitle: event.target.value};
    // })
    };
    //Amount Change Event
    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value);
    }
    //Date change Event
    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);
    }
    //submitHandler is
    const submitHandler = (event) =>{
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount : +enteredAmount,
            date : new Date(enteredDate),
        }
        props.onSaveExpenseData(expenseData);
        console.log(expenseData);
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
    }
    //click 취소버튼
    const cancelFormHandler = () =>{
      props.onClickBtnStateHandler(true);
    }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={enteredTitle}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={enteredAmount}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" step="2022-12-31" onChange={dateChangeHandler} value={enteredDate}/>
        </div>
      </div>
      <div className="new-expense__actions">
          <button type="submit" onClick={cancelFormHandler}>취소</button>
          <button type="submit">추가</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
