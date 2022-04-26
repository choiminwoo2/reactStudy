import './ExpenseItem.css';

function ExpenseDate({ date }) {
  const month = date.toLocaleString("ko-kr", { month: "long" });
  const day = date.toLocaleString("ko-kr", { day: "2-digit" });
  const year = date.getFullYear();
  return (
    <div className='expense-date'>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
}

export default ExpenseDate;
