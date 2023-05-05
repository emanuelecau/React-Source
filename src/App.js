import { useState } from "react";

function DynamicImage() {
  let [src, setSrc] = useState(
    "https://i.pinimg.com/originals/52/05/f9/5205f9eb757960896587c2e5e282971f.jpg"
  );
  return (
    <>
      <input onChange={(e) => setSrc(e.target.value)} />
      <img alt="immagine rotta" width="200" src={src} />
    </>
  );
}

function TodoList() {
  let [task, setTask] = useState("");
  let [tasks, setTasks] = useState([]);
  return (
    <>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <button
        onClick={() => {
          let newTasks = [...tasks];
          newTasks.push(task);
          setTasks(newTasks);
          setTask("");
        }}
      >
        Add
      </button>
      <ul>
        {tasks.map((t, index) => (
          <li
            onClick={() => {
              let newTasks = [...tasks];
              newTasks.splice(index, 1);
              setTasks(newTasks);
            }}
          >
            {t}
          </li>
        ))}
      </ul>
    </>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <TodoList />
    </div>
  );
}
