import TodoItem from "./TodoItem";

const TodoList = ({
    todos,
    onDelete,
    onToggle,
    onEdit,
}) => {
    if (todos.length === 0) {
        return (
            <div className="empty">
                <h3>No todos found</h3>
                <p>Add a new todo to get started.</p>
            </div>
        );
    }

    return (
        <div className="todo-list">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onDelete={onDelete}
                    onToggle={onToggle}
                    onEdit={onEdit}
                />
            ))}
        </div>
    );
};

export default TodoList;