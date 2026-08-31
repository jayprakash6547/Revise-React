
import Header from "./Component/Header";
import TodoForm from "./Component/TodoForm";
import TodoList from "./Component/TodoList";
import TodoFilter from "./Component/TodoFilter";
import TodoStats from "./Component/TodoStats";

import useTodos from "./hooks/useTodos";

const App = () => {
  const {
    filteredTodos,

    search,
    setSearch,

    filter,
    setFilter,

    totalTodos,
    activeTodos,
    completedTodos,

    addTodo,
    deleteTodo,
    toggleTodo,
    editTodo,

    clearCompleted,
    clearAll,
  } = useTodos();

  return (
    <div className="app">
      <Header />

      <TodoForm onAdd={addTodo} />

      <TodoFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />

      <TodoStats
        totalTodos={totalTodos}
        activeTodos={activeTodos}
        completedTodos={completedTodos}
        clearCompleted={clearCompleted}
        clearAll={clearAll}
      />

      <TodoList
        todos={filteredTodos}
        onDelete={deleteTodo}
        onToggle={toggleTodo}
        onEdit={editTodo}
      />
    </div>
  );
};

export default App;