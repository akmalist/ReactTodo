import React, { useState } from "react";
import TodoItem from "./TodoItem";

function App() {
  //1. When new text is written into the input, its state should be saved.
  const [item, setItem] = useState("");
  const [itemSubmit, setItemSumpit] = useState([]);

  function handleChange(event) {
    const { value } = event.target;
    setItem(value);
  }

  //2. When the add button is pressed, the current data in the input should be
  //added to an array.
  function addItem() {
    setItemSumpit(prevItems => {
      return [...prevItems, item];
    });
    setItem("");
  }

  function handleClickCross(id) {
    setItemSumpit(prevItems => {
      return prevItems.filter((prevItem, index) => {
        return index !== id;
      });
    });
  }

  //3. The <ul> should display all the array items as <li>s
  return (
    <div className="container">
      <div className="heading">
        <h1> To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={handleChange}
          value={item}
          name={item}
          type="text"
          placeholder="Add item "
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemSubmit.map((todoItem, index) => {
            return (
              <TodoItem
                key={index}
                id={index}
                text={todoItem}
                onChecked={handleClickCross}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
