import { createContext, useContext, useReducer } from "react";

import todoReducer  from "../reducers/todoReducer";
const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, dispatch] = useReducer(todoReducer, []);

    const addTodo = (title, priority) => {
        dispatch({
            type: "ADD_TODO",
            payload: {
                title,
                priority,
            },
        });
    };

    const deleteTodo = (id) => {
        dispatch({
            type: "DELETE_TODO",
            payload: id,
        });
    };

    const toggleTodo = (id) => {
        dispatch({
            type: "TOGGLE_TODO",
            payload: id,
        });
    };

    const editTodo = (id, title, priority) => {
        dispatch({
            type: "EDIT_TODO",
            payload: {
                id,
                title,
                priority,
            },
        });
    };

    const clearCompleted = () => {
        dispatch({
            type: "CLEAR_COMPLETED",
        });
    };

    const clearAll = () => {
        dispatch({
            type: "CLEAR_ALL",
        });
    };

    const loadTodos = (todos) => {
        dispatch({
            type: "LOAD_TODOS",
            payload: todos,
        });
    };

    return (
        <TodoContext.Provider
            value={{
                todos,
                addTodo,
                deleteTodo,
                toggleTodo,
                editTodo,
                clearCompleted,
                clearAll,
                loadTodos,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};

export const useTodoContext = () => {
    return useContext(TodoContext);
};