import { useCallback, useEffect, useMemo, useState } from "react";
import { useTodoContext } from "../context/TodoContext";

const useTodos = () => {
  const {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
    editTodo,
    clearCompleted,
    clearAll,
    loadTodos,
  } = useTodoContext();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  // Load todos from localStorage
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");

    if (savedTodos) {
      loadTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Save todos to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      const matchesSearch = todo.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesFilter =
        filter === "all" ||
        (filter === "active" && !todo.completed) ||
        (filter === "completed" && todo.completed);

      return matchesSearch && matchesFilter;
    });
  }, [todos, search, filter]);

  const handleAddTodo = useCallback(
    (title, priority) => {
      addTodo(title, priority);
    },
    [addTodo],
  );

  const handleDeleteTodo = useCallback(
    (id) => {
      deleteTodo(id);
    },
    [deleteTodo],
  );

  const handleToggleTodo = useCallback(
    (id) => {
      toggleTodo(id);
    },
    [toggleTodo],
  );

  const handleEditTodo = useCallback(
    (id, title, priority) => {
      editTodo(id, title, priority);
    },
    [editTodo],
  );

  const totalTodos = todos.length;

  const completedTodos = todos.filter((todo) => todo.completed).length;

  const activeTodos = totalTodos - completedTodos;

  return {
    todos,
    filteredTodos,

    search,
    setSearch,

    filter,
    setFilter,

    totalTodos,
    completedTodos,
    activeTodos,

    addTodo: handleAddTodo,
    deleteTodo: handleDeleteTodo,
    toggleTodo: handleToggleTodo,
    editTodo: handleEditTodo,

    clearCompleted,
    clearAll,
  };
};

export default useTodos;
