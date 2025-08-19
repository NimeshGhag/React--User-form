import { useState } from "react";
import  Read from "./Componats/Read";
import  Create from "./Componats/Create";

const App = () => {
  const [users, setUsers] = useState([
  ]);

  return (
    <div className="p-5 flex  justify-between gap-10 w-screen h-screen bg-zinc-900 text-white">
      <Create users ={users} setUsers={setUsers} />
      <Read users ={users} setUsers={setUsers} />
    </div>
  );
};

export default App;
