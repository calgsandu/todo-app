import React from "react";
import TodoCard from "./TodoCard";

const TodoList = ({
  todos,
  curTab,
  onHandleDeleteTodo,
  onhandleCompleteTodo,
}) => {
  const filterTodosList =
    curTab === "All"
      ? todos
      : curTab === "Completed"
      ? todos.filter((el) => el.complete)
      : todos.filter((el) => !el.complete);
  return (
    <>
      {filterTodosList.map((todo, todoIndex) => {
        return (
          <TodoCard
            key={todoIndex}
            todo={todo}
            onHandleDeleteTodo={onHandleDeleteTodo}
            onhandleCompleteTodo={onhandleCompleteTodo}
          />
        );
      })}
    </>
  );
};

export default TodoList;
