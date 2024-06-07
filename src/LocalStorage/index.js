export const getTodos = (key) => {
    return JSON.parse(localStorage.getItem(key)) || [];
};

export const setTodos = (key, todos) => {
    localStorage.setItem(key, JSON.stringify(todos));
};
