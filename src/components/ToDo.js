import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  removeTodoS,
  checkTodo,
  editTodo,
  modifyTodo,
} from "../actions/index";

function ToDo() {
  const [inputData, setInputData] = useState("");
  const [newInputData, setNewInputData] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.toDoReducer.list);
  return (
    <div>
      <input onChange={(e) => setInputData(e.target.value)} value={inputData} />
      <button onClick={() => dispatch(addTodo(inputData), setInputData(""))}>
        Add Task
      </button>
      {list.map((task, index) =>
        task.isChecked ? (
          <div key={task.id} style={{ textDecoration: "line-through" }}>
            <input
              type="checkbox"
              onChange={() => dispatch(checkTodo(index))}
            />
            <span>{task.task}</span>
            <button onClick={() => dispatch(deleteTodo(task.id))}>del</button>
          </div>
        ) : task.isEditable ? (
          <div key={task.id}>
            <input
              placeholder={task.task}
              onChange={(e) => setNewInputData(e.target.value)}
            />
            <button onClick={() => dispatch(modifyTodo(newInputData, index))}>
              Modify
            </button>
          </div>
        ) : (
          <div key={task.id}>
            <input
              type="checkbox"
              onChange={() => dispatch(checkTodo(index))}
            />
            <span>{task.task}</span>
            <button onClick={() => dispatch(deleteTodo(task.id))}>del</button>
            <button onClick={() => dispatch(editTodo(index))}>Edit</button>
          </div>
        )
      )}
      <br />
      <br />
      <button onClick={() => dispatch(removeTodoS())}>Delete All</button>
    </div>
  );
}

export default ToDo;
