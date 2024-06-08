export const generateId = () => {
    let currentId = parseInt(localStorage.getItem('currentId')) || 0;
    currentId++;
    localStorage.setItem('currentId', currentId.toString());
    return currentId;
};

