import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";

function TodoList({ todo, toggleComplite, index, deleteTodo, updateTodo }) {
  const [open, setOpen] = useState(false);
  const [editTodo, setEditTodo] = useState(todo.text);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditTodo(todo.text);
  };

  return (
    <>
      <li key={index} className="todoLisi-item">
        <div style={{ display: "flex", gap: "5px" }}>
          <Checkbox
            checked={todo.completed}
            onChange={() => toggleComplite(todo)}
          />
          <p
            onClick={() => toggleComplite(todo)}
            style={{ cursor: "pointer" }}
            className={todo.completed ? "line" : "none"}
          >
            {todo.text}
          </p>
        </div>
        <div className="block-buttons">
          <button
            className="todoList-buttonEdit"
            style={{ background: todo.completed ? "grey" : "#a01a1a" }}
            disabled={todo.completed}
            onClick={handleClickOpen}
          >
            Edit
          </button>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="todoLisi-button"
          >
            Delete
          </button>
        </div>
      </li>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Edit todo</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div style={{ width: "400px" }}>
              <input
                style={{ border: "1px solid grey" }}
                type="text"
                onChange={(e) => setEditTodo(e.target.value)}
                value={editTodo}
              />
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            disabled={todo.text === editTodo ? true : false}
            onClick={() => {
              updateTodo(editTodo, todo.id);
              setOpen(false);
            }}
            autoFocus
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default TodoList;
