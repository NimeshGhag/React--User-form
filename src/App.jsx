import { useState } from "react";
import  Read from "./Componats/Read";
import  Create from "./Componats/Create";

const App = () => {
  const [users, setUsers] = useState([
  ]);

  return (
    <div>
      <Create users ={users} setUsers={setUsers} />
      <Read users ={users} setUsers={setUsers} />
    </div>
  );
};

export default App;
