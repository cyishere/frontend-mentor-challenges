import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";

const data = [
  { id: 1, content: "Complete online JavsScript course", completed: true },
  { id: 2, content: "Jog around the park 3x", completed: false },
  { id: 3, content: "10 minutes meditation", completed: false },
  { id: 4, content: "Read for 1 hour", completed: false },
  { id: 5, content: "Pick up groceries", completed: false },
  { id: 6, content: "Complete Todo App on Frontend Mentor", completed: false },
];

function App() {
  const [todos, setTodos] = useState(data);

  return (
    <div className="wrapper light">
      <div className="container">
        <Header />
        <main>
          <TodoForm />
          <TodoList todos={todos} />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;