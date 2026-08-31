const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: Date.now(),
          title: action.payload.title,
          priority: action.payload.priority,
          completed: false,
          createdAt: new Date().toISOString(),
        },
      ];

    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);

    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo,
      );

    case "EDIT_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              title: action.payload.title,
              priority: action.payload.priority,
            }
          : todo,
      );

    case "CLEAR_COMPLETED":
      return state.filter((todo) => !todo.completed);

    case "CLEAR_ALL":
      return [];

    case "LOAD_TODOS":
      return action.payload;

    default:
      return state;
  }
};

export default todoReducer;
