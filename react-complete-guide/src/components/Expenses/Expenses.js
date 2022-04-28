import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";

function Expenses({ expenses }) {
  const [selectMenu, setSelectMenu] = useState("2020");

  const MenuSelect = (selectedYear) => {
    console.log("extenses.js");
    console.log(selectedYear);
    setSelectMenu(selectedYear);
  };
  //힌트1 FILTER 메서드
  //두번째 힌트, 너무 심각하게 생각하지 않아도 된다.
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectMenu;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={selectMenu} onChangeSelect={MenuSelect} />
        <ExpensesChart expensess={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
