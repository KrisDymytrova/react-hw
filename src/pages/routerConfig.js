import routeNames from "./routeNames";
import HomePage from "./HomePage";
import ItemPage from "./ItemPage";
import NotFound from "./NotFound";

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