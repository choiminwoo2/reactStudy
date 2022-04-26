import React from 'react';
import './NewExpense.css';

import ExpenseForm from './ExpenseForm';
const NewExpense = (props) =>{
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString
        }
        props.onAddExpense(expenseData);
    }
    //자식에게 함수를 넘겨주면 자식에서 사용하여 부모에게 전달해줄 수 있다.
    return <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
};

export default NewExpense;