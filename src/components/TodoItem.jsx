import React from "react";

function TodoItem(props) {
  // const [cross, setCross] = useState(false);

  // function handleClickCross() {
  //   if (!cross) {
  //     setCross(true);
  //   } else {
  //     setCross(false);
  //   }
  // }
  return (
    <li
      onClick={() => {
        props.onChecked(props.id);
      }}
      // style={{ textDecoration: cross ? "line-through" : null }}
    >
      {props.text}
    </li>
  );
}

export default TodoItem;
