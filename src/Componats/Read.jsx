const Read = (props) => {
  const users = props.users;

  const renderUser = users.map((user, index) => {
    return <li key={index}>{user.name} || <small>Age : {user.age}</small></li>;
  });

  return (
    <div>
      <h1>User Render</h1>
      <ol>{renderUser}</ol>
    </div>
  );
};

export default Read;

