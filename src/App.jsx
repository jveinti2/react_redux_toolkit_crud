import "./App.css";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
function App() {
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="font-bold text-2xl">Task crud Redux Toolkit</h1>
        <div>
          <TaskForm />
          <TaskList />
        </div>
      </div>
    </>
  );
}

export default App;
