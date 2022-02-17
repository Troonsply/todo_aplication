import React from "react";
import "./AppHeader";

export const AppHeader = ({ toDo, done }) => {
  return (
    <div className="app-header d-flex flex-column ">
      <h1>Todo List</h1>
      <h5>
        {toDo} more to do, {done} done
      </h5>
    </div>
  );
};
