import { useSelector } from "react-redux";

export default function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  return (
    <div className="flex gap-2">
      {tasks &&
        tasks.map((task) => (
          <div className="border-solid border-2 border-sky-500 p-2 rounded-md" key={task.id}>
            <h3 className="text-xl">{task.title}</h3>
            <p>{task.description}</p>
          </div>
        ))}
    </div>
  );
}
