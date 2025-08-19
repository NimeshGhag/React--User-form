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
    <div className="w-sm">
      <h1 className="text-5xl mb-8 font-thin">Register user</h1>
      <form className="flex gap-5" onSubmit={submitHandler}>
        <input
          className="outline-0 border-b text-sm "
          onChange={(e) => setFullname(e.target.value)}
          value={fullName}
          type="text"
          placeholder="Full Name"
        />

        <input
          className="outline-0 border-b text-sm"
          onChange={(e) => setAge(e.target.value)}
          value={age}
          type="number"
          placeholder="age"
        />
        <button className="rounded  border px-3 py-1 cursor-pointer hover:bg-zinc-500" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Create;
