import { useState } from "react";

const App = () => {
  const [users, setUsers] = useState([
    { name: "John", age: 12 },
    { name: "Ankur", age: 32 },
    { name: "Ayush", age: 22 },
  ]);

  const [fullName, setFullname] = useState("");
  const [age, setAge] = useState("18");

  const renderUser = users.map((user, index) => {
    return <li key={index}>{user.name}</li>;
  });

  const submitHandler = (e) => {
     e.preventDefault();
     const newUser = [fullName,age]
    console.log(newUser);
    setFullname('')
    
  };

  return (
    <div>
      <h1>Register user</h1>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setFullname(e.target.value)}
          value={fullName}
          type="text"
          placeholder="Full Name"
        />

        <input
          onChange={(e) => setAge(e.target.value)}
          value={age}
          type="number"
          placeholder="age"
        />
        <button>Submit</button>
      </form>
      <hr />
      <h1>User</h1>
      <p>{renderUser}</p>
    </div>
  );
};

export default App;
