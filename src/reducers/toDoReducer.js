const initialData = {
  list: [],
};

const toDoReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TODO":
      let { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            task: data,
            isChecked: false,
            isEditable: false,
          },
        ],
      };
    case "DELETE_TODO":
      const newList = state.list.filter((elem) => elem.id !== action.id);
      return {
        ...state,
        list: newList,
      };
    case "REMOVE_TODOS":
      return {
        ...state,
        list: [],
      };
    case "CHECK_TODO":
      let index = action.index;
      let myList = [...state.list];
      myList[index].isChecked = !myList[index].isChecked;
      return {
        ...state,
        list: myList,
      };

    case "EDIT_TODO":
      let indexEditable = action.index;
      let myListEditable = [...state.list];
      myListEditable[indexEditable].isEditable =
        !myListEditable[indexEditable].isEditable;
      //   console.log(myListEditable, state);
      return {
        ...state,
        list: myListEditable,
      };
    case "MODIFY_TODO":
      let { indexM, dataM } = action.payload;
      //   id = action.payload.id;

      let listM = [...state.list];
      listM.splice(indexM, 1, {
        id: action.payload.id,
        task: dataM,
        isChecked: false,
        isEditable: false,
      });
      console.log(action.payload, listM);
      //   listM[indexM] = {
      //     id: action.payload.id,
      //     task: dataM,
      //     isChecked: false,
      //     isEditable: false,
      //   };
      //   console.log("please Modify", listM);
      return {
        ...state,
        list: listM,
      };
    default:
      return state;
  }
};

export default toDoReducer;
