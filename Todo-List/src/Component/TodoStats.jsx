const TodoStats = ({
    totalTodos,
    activeTodos,
    completedTodos,
    clearCompleted,
    clearAll,
}) => {
    return (
        <div className="stats">
            <div>
                <strong>{totalTodos}</strong>
                <span>Total</span>
            </div>

            <div>
                <strong>{activeTodos}</strong>
                <span>Active</span>
            </div>

            <div>
                <strong>{completedTodos}</strong>
                <span>Completed</span>
            </div>

            <div className="stats-actions">
                <button onClick={clearCompleted}>
                    Clear Completed
                </button>

                <button onClick={clearAll}>
                    Clear All
                </button>
            </div>
        </div>
    );
};

export default TodoStats;