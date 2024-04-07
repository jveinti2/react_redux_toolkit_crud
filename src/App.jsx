import "./App.css";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
function App() {
  return (
    <>
      <div className="container mx-auto p-4">
        <h1>Task crud Redux Toolkit</h1>
        <main className="flex gap-4">
          <div>
            <TaskForm />
          </div>
          <TaskList />
        </main>
      </div>
    </>
  );
}

export default App;
