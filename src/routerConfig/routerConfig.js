import routeNames from './/routeNames';
import HomePage from '../pages/HomePage';
import OrderFormPage from '../pages/OrderFormPage';
import NotFoundPage from '../pages/NotFoundPage';

const pagesRoutesConfig = [
    {
        path: routeNames.homePage,
        component: HomePage,
        protectedRoute: true,
    },
    {
        path: routeNames.orderFormPage,
        component: OrderFormPage,
        protectedRoute: true,
    },
    {
        path: routeNames.notFoundPage,
        component: NotFoundPage,
        protectedRoute: false,
    },
];

export default pagesRoutesConfig;