import "./App.css";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import Categories from "./pages/Categories";
import CartPage from "./pages/CartPage";
import SubcategoriesPage from "./pages/SubcategoriesPage.jsx";
import ItemsPage from "./pages/ItemsPage";
import ItemDetails from "./pages/ItemDetails";

function App() {
    let routes = useRoutes([
        { path: "/", element: <MainPage /> },
        { path: "/about", element: <AboutPage /> },
        { path: "/categories", element: <Categories /> },
        { path: "/cart", element: <CartPage /> },
        { path: "/categories/sub/:id", element: <SubcategoriesPage /> },

        { path: "categories/sub/:id/items/:id/", element: <ItemsPage /> },
        { path: "/item/:id/", element: <ItemDetails /> },
    ]);
    return routes;
}

export default App;
