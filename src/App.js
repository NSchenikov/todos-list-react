import { useEffect, useState } from "react";
import "./App.css";

const fetchTodos = () => {
  return fetch("https://webdev-api.sky.pro/api/todos").then((res) =>
    res.json()
  );
};

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState({
    todos: [],
  });

  useEffect(() => {
    fetchTodos().then((data) => {
      setTodos(data);
    });
  }, []);

  const addTodo = () => {
    setTodos({
      todos: [
        ...todos.todos,
        {
          text: value,
          id: Date.now(),
          created_at: new Date(),
          user: null,
        },
      ],
    });
    setValue("");
  };
  return (
    <>
      <ul>
        {todos.todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <input
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <button onClick={addTodo}>Add</button>
    </>
  );
}

export default App;
