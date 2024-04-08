import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice.js";
import { v4 as uuid } from "uuid";

export default function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
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
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label htmlFor="">Title</label>
        <input className="rounded text-black" type="text" name="title" onChange={handleChange} />
      </div>
      <div className="flex flex-col">
        <label htmlFor="">Description</label>
        <textarea
          className="rounded text-black"
          name="description"
          onChange={handleChange}
        ></textarea>
      </div>

      <button className="bg-blue-600 rounded px-4 my-4 hover:bg-blue-800" type="submit">
        Send
      </button>
    </form>
  );
}
