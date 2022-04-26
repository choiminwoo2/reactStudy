import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";

function Expenses({ expenses }) {
  const [selectMenu,setSelectMenu] = useState('2020');

  const MenuSelect = selectedYear =>{
    console.log('extenses.js');
    console.log(selectedYear);
    setSelectMenu(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter selected={selectMenu} onChangeSelect ={MenuSelect}/>
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        />
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        />
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        />
        <ExpenseItem
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date}
        />
      </Card>
    </div>
  );
}

export default Expenses;