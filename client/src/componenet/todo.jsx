import React, { useState } from "react";
import { TiPencil, TiTrash } from "react-icons/ti";
import { toggleTodo, updateTodo, deleteTodo } from "../redux/actions";
import { useDispatch } from "react-redux";
import "../App.css";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.data);

  const onFormSubmit = (e) => {
    e.preventDefault();
    setEditing((prevState) => !prevState);
    dispatch(updateTodo(todo._id, text));
  };

  return (
    <li
      className="task"
      onClick={() => dispatch(toggleTodo(todo._id))}
      style={{
        textDecoration: todo.done ? "line-through" : "",
        color: todo.done ? "#bdc3c7" : "#344495e",
      }}
    >
      <span style={{ display: editing ? "none" : "" }}>{todo.data}</span>
      <form
        style={{ display: editing ? "inline" : "none" }}
        onSubmit={onFormSubmit}
      >
        <input
          type="text"
          value={text}
          className="edit-todo"
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      <span className="icon" onClick={() => dispatch(deleteTodo(todo._id))}>
        <TiTrash size={25} />
      </span>
      <span
        className="icon"
        onClick={() => setEditing((prevState) => !prevState)}
      >
        <TiPencil size={25} />
      </span>
    </li>
  );
};

export default Todo;
