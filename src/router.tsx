import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Products, {loader as productsLoader, action as updateAvailableAction  } from "./pages/Products";
import NewProduct from "./pages/NewProduct";
import EditProducts, {loader as editProductLoader} from "./pages/EditProducts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Products />,
        loader: productsLoader,
        action: updateAvailableAction,
      },{
        path: "products/new",
        element: <NewProduct />,
      },{
        path: "product/:id",
        element: <EditProducts />,
        loader: editProductLoader,
      }
    ],
  },
]);
