import { useState } from "react";

export const Create = (props) => {
  const users = props.users;
  const setUsers = props.setUsers;

  const [fullName, setFullname] = useState("");
  const [age, setAge] = useState("18");

  const submitHandler = (e) => {
    e.preventDefault();

    const newUser = {
      name: fullName,
      age: age,
    };

    setUsers([...users, newUser]);

    setFullname("");
    setAge("18");
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Create;
