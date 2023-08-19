import "./App.css";

const todos = {
  todos: [
    {
      text: "watch new lesson",
      id: 15,
      created_at: "2023-07-05T15:14:15.080Z",
      user: null,
    },
    {
      text: "pass hw",
      id: 16,
      created_at: "2023-07-05T15:14:42.499Z",
      user: null,
    },
    {
      text: "run training",
      id: 17,
      created_at: "2023-07-05T15:14:48.499Z",
      user: null,
    },
    {
      text: "reading",
      id: 18,
      created_at: "2023-07-05T15:14:49.739Z",
      user: null,
    },
  ],
};

function App() {
  const addTodo = () => {
    alert("clicked");
  };
  return (
    <>
      <ul>
        {todos.todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <input />
      <button onClick={addTodo}>Add</button>
    </>
  );
}

export default App;
