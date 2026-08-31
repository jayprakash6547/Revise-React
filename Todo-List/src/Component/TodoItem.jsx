import { memo, useState } from "react";

const TodoItem = ({
    todo,
    onDelete,
    onToggle,
    onEdit,
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(todo.title);
    const [priority, setPriority] = useState(todo.priority);

    const handleSave = () => {
        if (!title.trim()) {
            return;
        }

        onEdit(todo.id, title.trim(), priority);

        setIsEditing(false);
    };

    return (
        <div
            className={`todo-item ${todo.completed ? "completed" : ""
                }`}
        >
            {isEditing ? (
                <>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <select
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                    >
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>

                    <button onClick={handleSave}>
                        Save
                    </button>

                    <button
                        onClick={() => setIsEditing(false)}
                    >
                        Cancel
                    </button>
                </>
            ) : (
                <>
                    <div className="todo-content">
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => onToggle(todo.id)}
                        />

                        <span className="todo-title">
                            {todo.title}
                        </span>

                        <span
                            className={`priority ${todo.priority}`}
                        >
                            {todo.priority}
                        </span>
                    </div>

                    <div className="todo-actions">
                        <button
                            onClick={() => setIsEditing(true)}
                        >
                            Edit
                        </button>

                        <button
                            onClick={() => onDelete(todo.id)}
                        >
                            Delete
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default memo(TodoItem);