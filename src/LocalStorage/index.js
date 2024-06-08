export const getTodos = (key) => {
    const savedTodos = localStorage.getItem(key);
    return savedTodos ? JSON.parse(savedTodos) : [];
};

export const setTodos = (key, todos) => {
    if (todos.length === 0) {
        localStorage.removeItem(key);
    } else {
        localStorage.setItem(key, JSON.stringify(todos));
    }
};

export const removeTodos = (key) => {
    localStorage.removeItem(key);
};
