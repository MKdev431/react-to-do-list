import { useState } from "react";
import "./styles.css";
import Form from "./components/Form";

export default function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    setTodos(currentTodos => {
      return [...currentTodos, { id: crypto.randomUUID(), title, completed: false }];
    });
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  const deleteTodo = id => {
    setTodos(currentTodos => currentTodos.filter(todo => todo.id !== id));
  };

  return (
    <>
      <Form onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.length === 0 && "No todos"}
        {todos.map(todo => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={e => toggleTodo(todo.id, e.target.checked)}
                />
                {todo.title}
              </label>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
