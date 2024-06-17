import routeNames from '../router/routeNames';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import TodoItemPage from '../pages/TodoItemPage';
import AllTodosPage from '../pages/AllTodosPage';
import NotFoundPage from '../pages/NotFoundPage';

const pagesRoutesConfig = [
    {
        path: routeNames.loginPage,
        component: LoginPage,
        protectedRoute: false,
    },
    {
        path: routeNames.homePage,
        component: HomePage,
        protectedRoute: true,
    },
    {
        path: routeNames.todoItemPage,
        component: TodoItemPage,
        protectedRoute: true,
    },
    {
        path: routeNames.allTodosPage,
        component: AllTodosPage,
        protectedRoute: true,
    },
    {
        path: routeNames.notFoundPage,
        component: NotFoundPage,
        protectedRoute: false,
    },
];

export default pagesRoutesConfig;
