import { useState } from "react";
import  Read from "./Componats/Read";
import  Create from "./Componats/Create";

const App = () => {
  const [users, setUsers] = useState([
    { name: "John", age: 12 },
    { name: "Ankur", age: 32 },
    { name: "Ayush", age: 22 },
  ]);

  return (
    <div>
      <Create />
      <Read users ={users} setUsers={setUsers} />
    </div>
  );
};

export default App;
