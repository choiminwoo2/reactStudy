//모듈 css 적용
import './ExpenseItem.css';
function ExpenseItem() {
    const ExpenseDate = new Date(2021, 2, 28);
    const exprenseTitle = '차 가격';
    const expenseAmount = '500만'
  return (
    <div className="expense-item">
      <div>{ExpenseDate.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{exprenseTitle}</h2>
        <div className='expense-item__price'>{expenseAmount}</div>
      </div>
    </div>
  );
}
// 모듈 출력하기 
export default ExpenseItem;
