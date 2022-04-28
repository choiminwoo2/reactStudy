import React, { useState } from 'react';
import './NewExpense.css';

import ExpenseForm from './ExpenseForm';
const NewExpense = (props) =>{
    const [btnState,setBtnState] = useState(true);
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString
        }
        props.onAddExpense(expenseData);
    }
    //자식에게 함수를 넘겨주면 자식에서 사용하여 부모에게 전달해줄 수 있다.
    const addBtnClickHandler = () =>{
        setBtnState(false);
    }

    const saveBtnState = (clickBtnState) => {
        setBtnState(clickBtnState);
    }

    //직접 해결한 솔루션
    return <div className='new-expense'>
        {btnState ? <button onClick={addBtnClickHandler}>Add New Expense</button> :
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onClickBtnStateHandler={saveBtnState}/>
        }
    </div>
    //강의에서 확인한 솔루션
    // return <div className='new-expense'>
    //     {btnState && <button onClick={addBtnClickHandler}>Add New Expense</button>} 
    //     {!btnState && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onClickBtnStateHandler={saveBtnState}/>}
    // </div>
};

export default NewExpense;