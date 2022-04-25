import ExpenseItem from "./components/ExpenseItem";
//리액트 기본개념
//모든 컴포넌트엔 루트 태그가 존재해야 한다.
//모든 컴포넌트의 시작은 App에서 시작한다.
function App() {
  return (
    <div className="App">
      <h2>Let's get started!</h2>
      <ExpenseItem />
      <ExpenseItem />
      <ExpenseItem />
      <ExpenseItem />

    </div>
  );
}

export default App;
