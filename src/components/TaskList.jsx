import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";

export default function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="grid gap-2 md:grid-cols-4">
      {tasks &&
        tasks.map((task) => (
          <div className="border-solid border-2 border-sky-500 p-2 rounded-md" key={task.id}>
            <h3 className="text-xl">{task.title}</h3>
            <p>{task.description}</p>
            <button
              onClick={() => handleDelete(task.id)}
              className="bg-red-600 rounded px-4  hover:bg-red-800"
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  );
}
