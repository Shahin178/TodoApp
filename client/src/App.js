import "./App.css";
import TodoForm from "./componenet/todoForm";
import Header from "./componenet/header";
import Todos from "./componenet/todos";

function App() {
  return (
    <div>
      <Header />
      <TodoForm />
      <Todos />
    </div>
  );
}

export default App;
