export const addTodo = (data) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    id,
  };
};

export const removeTodoS = () => {
  return {
    type: "REMOVE_TODOS",
  };
};

export const checkTodo = (index) => {
  return {
    type: "CHECK_TODO",
    index,
  };
};

export const editTodo = (index) => {
  return {
    type: "EDIT_TODO",
    index,
  };
};

export const modifyTodo = (data, index) => {
  return {
    type: "MODIFY_TODO",
    payload: {
      id: new Date().getTime().toString(),
      dataM: data,
      indexM: index,
    },
  };
};
