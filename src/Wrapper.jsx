import { createContext, useState } from "react";

export const usercontext = createContext(null);
const Wrapper = (props) => {
  const [users, setUsers] = useState([]);
  return (
    <usercontext.Provider value={[users, setUsers]}>
      {props.children}
    </usercontext.Provider>
  );
};

export default Wrapper;
