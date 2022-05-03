import React,{ useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
function App() {
  const [userData, setUserData] = useState([]);

  const listAddHandler = (data) => {
    setUserData((prevData) => {
      return [...prevData, data];
    });
  };
  return (
    <React.Fragment>
      <AddUser getUserData={listAddHandler} />
      <UserList userDatas={userData} />
    </React.Fragment>
  );
}

export default App;
