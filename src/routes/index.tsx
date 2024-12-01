import { useRoutes } from "react-router-dom";
import Home from "./home/Home";
import Cart from "./cart/Cart";

const RouteController = () => {
    return useRoutes([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/cart",
            element: <Cart />,
        },
    ]);
};

export default RouteController;
