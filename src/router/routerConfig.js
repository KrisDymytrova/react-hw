import routeNames from './/routeNames';
import HomePage from '../pages/HomePage';
import OrderFormPage from '../pages/OrderFormPage';
import NotFoundPage from '../pages/NotFoundPage';

const pagesRoutesConfig = [
    {
        path: routeNames.homePage,
        component: HomePage,
    },
    {
        path: routeNames.orderFormPage,
        component: OrderFormPage,
    },
    {
        path: routeNames.notFoundPage,
        component: NotFoundPage,
    },
];

export default pagesRoutesConfig;