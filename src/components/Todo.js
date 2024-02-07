import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import { db } from "../firebase.js";
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [valueInput, setValueInput] = useState("");

  //create todo from firebase

  const createTodo = async (e) => {
    e.preventDefault();

    if (valueInput === "") {
      alert("Please enter a valid todo");
      return;
    }

    await addDoc(collection(db, "todos"), {
      text: valueInput,
      completed: false,
    });

    setValueInput("");
  };

  //read todo in firebase

  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
    });
    return () => unsubscribe();
  }, []);

  //update todo in firebase

  const toggleComplite = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), { completed: !todo.completed });
  };

  const updateTodo = async (value, id) => {
    await updateDoc(doc(db, "todos", id), { text: value });
  };

  //delete todo in firebase

  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  return (
    <div className="todo-block">
      <div className="todo-container">
        <h3 className="todo-title">Todo List</h3>
        <form onSubmit={createTodo} className="form-block">
          <input
            value={valueInput}
            onChange={(e) => setValueInput(e.target.value)}
            type="text"
            placeholder="Add Todo"
          />
          <button className="todo-button" type="submit">
            Add
          </button>
        </form>
        {todos.length === 0 ? (
          <p>Loading....</p>
        ) : (
          <ul className="todoList-container">
            {todos.map((item, index) => (
              <TodoList
                todo={item}
                index={index}
                toggleComplite={toggleComplite}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
              />
            ))}
          </ul>
        )}
        {todos.length > 0 && <p>You have {todos.length} todos</p>}
      </div>
    </div>
  );
}

export default Todo;
