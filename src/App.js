import "./App.css";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import Categories from "./pages/Categories";
import CartPage from "./pages/CartPage";
import SubcategoriesPage from "./pages/SubcategoriesPage.jsx";
import ItemsPage from "./pages/ItemsPage";
import ItemDetails from "./pages/ItemDetails";
import OfertaPage from "./pages/OfertaPage";

function App() {
    let routes = useRoutes([
        { path: "/", element: <MainPage /> },
        { path: "/about", element: <AboutPage /> },
        { path: "/categories", element: <Categories /> },
        { path: "/cart", element: <CartPage /> },
        { path: "/:sub/:id", element: <SubcategoriesPage /> },
        // ${subcat}/${subcatId}/items/${id}/
        {
            path: "/:subcat/:subcatId/:sub/:id/items/:id/",
            element: <ItemsPage />,
        },
        {
            path: "/:subcat/:subcatId/:sub/:id/items/:subid/sub/item/:id",
            element: <ItemDetails />,
        },
        {
            path: "/sub/item/:id",
            element: <ItemDetails />,
        },
        {
            path: "oferta",
            element: <OfertaPage />,
        },
    ]);
    return routes;
}

export default App;
