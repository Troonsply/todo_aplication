import React, { Component } from "react";
import ReactDOM from "react-dom";
import { AppHeader } from "./components/appHeader/AppHeader";
import { SearchPanel } from "./components/searchPanel/SearchPanel";
import { TodoList } from "./components/todoList/TodoList";
import { ItemStatusFilter } from "./components/itemStatusFilter/ItemStatusFilter";
import ItemAddForm from "./components/itemAddForm";
import "./index.css";

export class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem("Drink Coffee"),
      this.createTodoItem("Make Awesome App"),
      this.createTodoItem("Have a lunch"),
    ],
    term: "",
    filter: "all",
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++,
    };
  }
  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const indx = todoData.filter((item) => item.id !== id);
      return { todoData: indx };
    });
  };
  addItem = (text) => {
    const newItem = this.createTodoItem(text);
    this.setState(({ todoData }) => {
      const newArray = todoData.slice();
      newArray.push(newItem);
      return { todoData: newArray };
    });
  };

  toggleProperty(arr, id, property) {
    return arr.map((el) => {
      const newEl = { ...el };
      if (newEl.id === id) newEl[property] = !newEl[property];
      return newEl;
    });
  }
  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return { todoData: this.toggleProperty(todoData, id, "important") };
    });
  };
  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return { todoData: this.toggleProperty(todoData, id, "done") };
    });
  };
  onFilterChange = (filter) => {
    this.setState({ filter });
  };
  onSearchChange = (term) => {
    this.setState({ term });
  };

  searchItem(items, term) {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }
  filterItems(items, filter) {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter((item) => !item.done);
      case "done":
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }
  render() {
    const { todoData, term, filter } = this.state;
    const visibleItems = this.filterItems(
      this.searchItem(todoData, term),
      filter
    );
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;
    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={this.onSearchChange} />
          <ItemStatusFilter
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
        </div>
        <TodoList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm onItemAdded={this.addItem} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
