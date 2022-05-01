import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
function App() {
  const [userData, setUserData] = useState([]);

  const listAddHandler = (data) => {
    setUserData((curreuntData) => {
      return [...curreuntData, data];
    });
  };
  return (
    <div className="App">
      <AddUser getUserData={listAddHandler} />
      <UserList userDatas={userData} />
    </div>
  );
}

export default App;
