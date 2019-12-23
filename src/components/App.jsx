import React, { useState } from "react";
import TodoItem from "./TodoItem";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([]);

  function addTodo(todo) {
    setItems(prevItems => {
      return [...prevItems, todo];
    });
  }

  function removeItem(id) {
    setItems(prevItems => {
      return prevItems.filter((value, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <InputArea addItem={addTodo} />
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <TodoItem
              key={index}
              id={index}
              deleteItem={removeItem}
              Todo={todoItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
