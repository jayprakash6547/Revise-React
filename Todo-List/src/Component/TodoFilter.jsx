const TodoFilter = ({
    search,
    setSearch,
    filter,
    setFilter,
}) => {
    return (
        <div className="filters">
            <input
                type="text"
                placeholder="Search todos..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="filter-buttons">
                <button
                    className={filter === "all" ? "active" : ""}
                    onClick={() => setFilter("all")}
                >
                    All
                </button>

                <button
                    className={filter === "active" ? "active" : ""}
                    onClick={() => setFilter("active")}
                >
                    Active
                </button>

                <button
                    className={
                        filter === "completed" ? "active" : ""
                    }
                    onClick={() => setFilter("completed")}
                >
                    Completed
                </button>
            </div>
        </div>
    );
};

export default TodoFilter;