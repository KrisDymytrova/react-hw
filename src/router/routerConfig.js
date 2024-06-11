import routeNames from "./routeNames";
import HomePage from "../pages/HomePage";
import ItemPage from "../pages/ItemPage";
import NotFound from "../pages/NotFound";

const pagesRoutesConfig = [
    {
        path: routeNames.homePage,
        component: HomePage,
        id: 1,
    },
    {
        path: routeNames.itemPage,
        component: ItemPage,
        id: 2,
    },
    {
        path: routeNames.notFound,
        component: NotFound,
        id: 3
    }
]

export default pagesRoutesConfig;