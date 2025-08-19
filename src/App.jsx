import { useEffect, useState } from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Alabala from "./components/Alabala";

function App() {
  const [todos, setTodos] = useState([{ input: "Test 12334", complete: true }]);
  const [curTab, setCurTab] = useState("All");

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }
  function handleCompleteTodo(index) {
    //update/edit/modify
    const newTodoList = todos.map((todo) =>
      todo === index ? { ...todo, complete: true } : todo
    );
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((el) => el !== index);
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleSaveData(curTodos) {
    localStorage.setItem("todo-app", JSON.stringify({ todos: curTodos }));
  }
  // const todos = [
  // { input: "Hello! Add your first todo!", complete: true },
  // { input: "Get the groceries!", complete: false },
  // { input: "Learn how to web design", complete: false },
  // { input: "Say hi to gran gran", complete: true },
  // ];
  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todo-app")) return;
    let db = JSON.parse(localStorage.getItem("todo-app"));
    setTodos(db.todos);
  }, []);
  return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos} curTab={curTab} setCurTab={setCurTab} />
      <TodoList
        todos={todos}
        curTab={curTab}
        setCurTab={setCurTab}
        onHandleDeleteTodo={handleDeleteTodo}
        onhandleCompleteTodo={handleCompleteTodo}
      />
      <TodoInput onHandleAdd={handleAddTodo} />
      <Alabala />
    </>
  );
}

export default App;
