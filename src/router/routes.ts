import {ComponentType} from "react";
import RouteNames from "router/routeNames";
import Home from "pages/Home";
import About from "pages/About";

interface IRoute {
    path: RouteNames,
    component: ComponentType,
    exact?: boolean
}

export default [
    {
        path: RouteNames.ABOUT,
        component: About,
        exact: true
    },
    {
        path: RouteNames.ROOT,
        component: Home,
        exact: true
    }
] as IRoute[]