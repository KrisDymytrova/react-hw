const routeNames = {
    loginPage: '/login',
    homePage: '/',
    todoItemPage: '/todo/:id',
    allTodosPage: '/all-todos',
    notFoundPage: '/*'
}

Object.freeze(routeNames);
export default routeNames;