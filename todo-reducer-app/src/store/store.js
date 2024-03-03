import { createContext } from "react";

export const initialState = {
    todos: [],
    editData: {
        index: -1,
        data: ''
    },
    addTodo: () => {},
    editTodo: () => {},
    deleteTodo: () => {},
    updateTodo: () => {},
}

const store = createContext(initialState);

export default store;