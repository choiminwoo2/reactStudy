import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

//모듈 css 적용
import './ExpenseItem.css';
import { useState } from 'react';
function ExpenseItem({title,amount,date}) {

  //function clickHandler(){}
  const [titles,setTitle] = useState(title);

  const clickHandler = () =>{
    setTitle('Updated!');
    console.log(titles);
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={date}/>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </Card>
  );
}
// 모듈 출력하기 
export default ExpenseItem;
