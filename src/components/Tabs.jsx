import React from "react";
import TodoCard from "./TodoCard";

const Tabs = ({ todos, curTab, setCurTab }) => {
  const tabs = ["All", "Open", "Completed"];

  return (
    <>
      <nav className="tab-container">
        {tabs.map((el, elID) => {
          const numOfTasks =
            el === "All"
              ? todos.length
              : el === "Completed"
              ? todos.filter((val) => val.complete).length
              : todos.filter((val) => !val.complete).length;
          return (
            <button
              onClick={() => {
                setCurTab(el);
              }}
              key={elID}
              className={`tab-button ${el === curTab ? "tab-selected" : ""}`}
            >
              {el} ({numOfTasks})
            </button>
          );
        })}
        <hr />
      </nav>
    </>
  );
};
export default Tabs;
