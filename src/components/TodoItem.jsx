import React from "react";

function TodoItem(props) {
 
  return <li onClick={() => props.deleteItem(props.id)}>{props.Todo}</li>;
}

export default TodoItem;
