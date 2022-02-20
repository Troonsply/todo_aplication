import React from "react";
import { TodoListItem } from "../todoListItem/TodoListItem";

import "./TodoList.css";

export const TodoList = ({
  todos,
  onDeleted,
  onToggleDone,
  onToggleImportant,
}) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
          {...itemProps}
        />
      </li>
    );
  });

  return <ul className="list-group todo-list">{elements}</ul>;
};
