// import React from "react";
import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
//리액트 기본개념
//모든 컴포넌트엔 루트 태그가 존재해야 한다.
//모든 컴포넌트의 시작은 App에서 시작한다.
const DUMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {   
    id: "e2", 
    title: "New TV", 
    amount: 799.49, 
    date: new Date(2021, 2, 12) 
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses,setExpenses] =useState(DUMY_EXPENSES);
  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense,...prevExpenses];
    });
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
  //JSX 문법이 실제로 동작하는 방식

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2',{},"Let's get Start"),
  //   React.createElement(Expenses, {expenses: expenses})
  // );
}
export default App;
