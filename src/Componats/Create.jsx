import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export const Create = (props) => {
  const users = props.users;
  const setUsers = props.setUsers;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    setUsers([...users, data]);
    reset();
    toast.success("User Created");
  };

  return (
    <div className="w-sm">
      <h1 className="text-5xl mb-8 font-thin">Register user</h1>
      <form className="flex gap-5" onSubmit={handleSubmit(submitHandler)}>
        <div>
          <input
            {...register("name", { required: "Name can not be Empty" })}
            className="outline-0 border-b text-sm pb-2 capitalize"
            type="text"
            placeholder="Full Name"
          />
          <small className="font-thin text-xs text-red-400">
            {errors?.name?.message}
          </small>
        </div>

        <div>
          <input
            {...register("age", { required: "age can not be Empty" })}
            className="outline-0 border-b text-sm pb-2"
            type="number"
            placeholder="age"
          />
          <small className="font-thin text-xs text-red-400">
            {errors?.name?.message}
          </small>
        </div>

        <div>
          <button
            className="rounded  border px-3 py-1 cursor-pointer hover:bg-zinc-500"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
