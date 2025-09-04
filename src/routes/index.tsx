import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../page/dashboard/Dashboard";
import Category from "../page/category/Category";
import Suggest from "../page/suggest/Suggest";
import Order from "../page/order/Order";
import Profile from "../page/profile/Profile";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <Category />,
      },
      {
        path: "/suggest",
        element: <Suggest />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);
