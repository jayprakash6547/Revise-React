import { useEffect, useRef, useState } from "react";

const TodoForm = ({ onAdd }) => {
    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState("medium");

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim()) {
            return;
        }

        onAdd(title.trim(), priority);

        setTitle("");
        setPriority("medium");

        inputRef.current.focus();
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                ref={inputRef}
                type="text"
                placeholder="Enter a todo..."
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

            <button type="submit">Add</button>
        </form>
    );
};

export default TodoForm;