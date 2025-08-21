import { toast } from "react-toastify";

const Read = (props) => {
  const users = props.users;
  const setUsers = props.setUsers;

  const DeleteHandler =(index)=>{
    const filterUser = users.filter((user ,i)=> i !== index);
    setUsers(filterUser);
    toast.error('User Deleted')
  }


  const renderUser = users.map((user, index) => {
    return (
      <li key={index} className="  mb-2 p-2 flex justify-between items-center bg-zinc-800 rounded capitalize">
        {user.name} || Age : {user.age}
        <button className=" rounded  text-xs border px-2 py-1 bg-red-700 cursor-pointer" onClick={()=>DeleteHandler(index)}>Delete</button>
      </li>
    );
  });

  return (
    <div className="w-2xs ">
      <h1 className="text-5xl mb-8 font-thin ">User Render</h1>
      <ol className=" rounded text-center ">{renderUser}</ol>
    </div>
  );
};

export default Read;
