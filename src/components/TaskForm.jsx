import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice.js";
import { v4 as uuid } from "uuid";

export default function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    ddescription: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTask({
        ...task,
        id: uuid(),
      })
    );
  };

  return (
    <form className="border-blue-500 border-solid" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Title</label>
        <input type="text" name="title" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">Description</label>
        <textarea name="description" onChange={handleChange}></textarea>
      </div>

      <button type="submit">Send</button>
      <div className="sm:col-span-4">
        <label className="block text-sm font-medium leading-6 text-gray-900">Username</label>
        <div className="mt-2">
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
            <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
              workcation.com/
            </span>
            <input
              type="text"
              name="username"
              id="username"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="janesmith"
            />
          </div>
        </div>
      </div>
    </form>
  );
}
