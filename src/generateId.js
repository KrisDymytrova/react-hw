export const generateId = () => {
    let currentId = parseInt(localStorage.getItem('currentId')) || 0;
    currentId += 1;
    localStorage.setItem('currentId', currentId.toString());
    return currentId;
};
