import React from "react";

const TodoCard = ({ todo, onHandleDeleteTodo, onhandleCompleteTodo }) => {
  return (
    <div className="card todo-item">
      <p>{todo.input}</p>
      <div className="todo-buttons">
        <button
          disabled={todo.complete}
          onClick={() => onhandleCompleteTodo(todo)}
        >
          <h6>Done</h6>
        </button>
        <button onClick={() => onHandleDeleteTodo(todo)}>
          <h6>Delete</h6>
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
